/// <reference path="../typings/all.d.ts" />
import * as React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { provide } from "react-redux";

import { thunk } from "./utils/misc";
import BoardApp from "./components/boardApp";
import * as reducers from "./reducers/index";


// TODO: need the any cast otherwise i get
// Index signature is missing in type 'typeof "react-boilerplate/src/app/reducers/index"'.
const reducer = combineReducers(<any> reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


@provide(store)
class App extends React.Component<any, any> {
    render() {
        return BoardApp();
    }
}


React.render(
    React.createElement(App),
    document.getElementById("container")
);
