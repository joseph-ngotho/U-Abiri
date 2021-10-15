import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './forms';
import addRoute from './forms/addRoute';
import addSystemUser from './forms/addSystemUser';
import AddVehicle from './forms/addVehicle';
import editRoute from './forms/editRoute';
import Login from "./forms/login";
import PrivateRoute from "./Utils/privateRoute";
import { getToken, removeUserSession, setUserSession } from './Utils/common'

function App() {

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:9000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <Router>
        <Switch> <Route exact path="/" component={Login} />
          <div>
            <Navbar />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/addRoute" component={addRoute} />
            <PrivateRoute path="/addSystemUser" component={addSystemUser} />
            <PrivateRoute path="/addVehicle" component={AddVehicle} />
            <PrivateRoute path="/editRoute" component={editRoute} />
          </div>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
