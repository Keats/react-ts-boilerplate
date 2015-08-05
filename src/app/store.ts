import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerStateReducer } from "redux-react-router";

import * as reducers from "./reducers/index";
import { thunk } from "./utils/misc";


// TODO: cleanup, need the any cast otherwise i get
// Index signature is missing in type 'typeof "react-boilerplate/src/app/reducers/index"'.
(<any>reducers).router = routerStateReducer;
const reducer = combineReducers(reducers);

const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducer);

export default store;
