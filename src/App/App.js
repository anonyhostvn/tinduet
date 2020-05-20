import React from 'react';
import './App.css';
import BasicLayout from "../Layout/BasicLayout";
import {AppRoute} from "./App.router";
import {Provider} from "react-redux";
import {store} from "../redux/store";


function App() {
    return (
        <Provider store={store}>
            <BasicLayout>
                <AppRoute/>
            </BasicLayout>
        </Provider>
    );
}

export default App;
