import React from 'react';
import './App.css';
import BasicLayout from "../Layout/BasicLayout";
import {AppRoute} from "./App.router";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const FunctionalAppPart = ({isLogin}) => {
    if (!isLogin) return <Redirect to={'/login'}/>;
    return (
        <BasicLayout>
            <AppRoute/>
        </BasicLayout>
    );
}

const mapStateToProps = state => ({
    isLogin: state.Auth.isLogin
})

export default connect(
    mapStateToProps
)(FunctionalAppPart);
