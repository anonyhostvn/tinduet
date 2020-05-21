import React from 'react';
import {Route} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {history} from "../redux/store";
import LoginPage from "../container/LoginPage";
import SignUpPage from "../container/SignupPage";
import FunctionalAppPart from "../App";

export const routes = [
    {
        path: '/app',
        component: <FunctionalAppPart/>
    },
    {
        path: '/login',
        component: <LoginPage/>
    },
    {
        path: '/signup',
        component: <SignUpPage/>
    }
];

export const TinduetAppRoute = () => {
    return (
        <ConnectedRouter history={history}>
                {
                    routes.map(
                        singleRoute => {
                            const {path, component} = singleRoute;
                            return (
                                <Route path={path}>
                                    {component}
                                </Route>
                            );
                        }
                    )
                }
        </ConnectedRouter>
    )
};