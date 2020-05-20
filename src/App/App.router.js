import React from 'react';
import MatchingPlace from "../container/MatchingPlace";
import {Route, Router, Switch} from "react-router-dom";
import {history} from "../redux/store";
import MessagePlace from "../container/MessagePlace";

export const routes = [
    {
        path: '/explore',
        component: <MatchingPlace/>
    },
    {
        path: '/message',
        component: <MessagePlace/>
    }
];

export const AppRoute = () => {
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map(
                        singleRoute => {
                            const {path, component} = singleRoute;
                            return <Route path={path} exact={true}>
                                {component}
                            </Route>
                        }
                    )
                }
            </Switch>
        </Router>
    )
};