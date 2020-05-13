import React from 'react';
import './App.css';
import BasicLayout from "../Layout/BasicLayout";
import {AppRoute} from "./App.router";


function App() {
    return (
        <BasicLayout>
            <AppRoute/>
        </BasicLayout>
    );
}

export default App;
