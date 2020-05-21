import {createAction, createReducer} from 'redux-act';
import {checkAuthorize} from "./mockAccount";

export const isLoginItemName = 'isLogin';

const getLoginParam = () => localStorage.getItem(isLoginItemName) ? localStorage.getItem('isLogin') : false;

const defaultAuthState = {
    isLogin: getLoginParam()
};

export const authRa = createReducer({}, defaultAuthState);

export const requestLogin = createAction('requestLogin');
authRa.on(requestLogin, (state, payload) => {
    const isAuthorized = checkAuthorize({username: payload.username, password: payload.password});
    localStorage.setItem(isLoginItemName, isAuthorized);
    return {
        ...state,
        isLogin: isAuthorized
    }
});

export const requestLogout = createAction('requestLogout');
authRa.on(requestLogout, (state, payload) => {
    localStorage.setItem(isLoginItemName, false);
    return {
        ...state,
        isLogin: false
    }
});