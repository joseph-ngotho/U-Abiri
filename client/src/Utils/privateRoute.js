import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { getToken } from "./common";



//handle the private routes

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ path: '../forms/login', state: { from: props.location } }} />}
        />
    )
}

export default PrivateRoute;