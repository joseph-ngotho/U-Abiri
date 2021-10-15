import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./common";


// hnadle the public routes

function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ path: '../forms/index' }} />}
        />
    )
}

export default PublicRoute;