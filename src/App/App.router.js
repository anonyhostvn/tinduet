import React from 'react';
import MatchingPlace from "../container/MatchingPlace";
import {Route, Switch} from "react-router-dom";
import MessagePlace from "../container/MessagePlace";
import ProfilePlace from "../container/ProfilePlace";

export const routes = [
    {
        path: '/app/explore',
        component: <MatchingPlace/>
    },
    {
        path: '/app/message',
        component: <MessagePlace/>
    },
    {
        path: '/app/profile',
        component: <ProfilePlace/>
    }
];

export const AppRoute = () => {
    return (
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
    )
};