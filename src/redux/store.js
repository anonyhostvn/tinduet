import {createBrowserHistory} from 'history';
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootReducer from './reducer';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';

const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history);
const middleware = [appRouterMiddleware, logger];

const appReducer = {
    ...rootReducer,
    router: connectRouter(history)
};

const store = createStore(
    combineReducers({...appReducer}),
    composeWithDevTools(applyMiddleware(...middleware))
);

export {store, history};