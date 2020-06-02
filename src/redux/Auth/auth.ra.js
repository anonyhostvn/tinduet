import {createAction, createReducer} from 'redux-act';
import {checkAuthorize} from "./mockAccount";

export const isLoginItemName = 'isLogin';
export const uidItemName = 'uid';

const getLoginParam = () => localStorage.getItem(isLoginItemName) ? localStorage.getItem(isLoginItemName) === 'true' : false;
const getUidParam = () => localStorage.getItem(uidItemName) ? parseInt(localStorage.getItem(uidItemName),10) : null;

const defaultAuthState = {
    isLogin: getLoginParam(),
    uid: getUidParam()
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

export const updateUserInfo = createAction('updateUserInfo');
authRa.on(updateUserInfo, (state, payload) => {
    const {userInfo} = payload;
    localStorage.setItem(uidItemName, userInfo.uid);
    return {
        ...state,
        uid: userInfo.uid
    }
});