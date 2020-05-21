import React from 'react';
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {TinduetAppRoute} from "./tinduetAppRoute";

const TinduetApp = () => {
    return (
        <Provider store={store}>
            <TinduetAppRoute/>
        </Provider>
    )
};

export default TinduetApp;