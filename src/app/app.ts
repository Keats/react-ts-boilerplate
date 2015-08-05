/// <reference path="../typings/all.d.ts" />
import * as React from "react";
let { h1, div } = React.DOM;
import * as ReactDom from "react-dom";
import { provide } from "react-redux";
import BrowserHistory from "react-router/lib/BrowserHistory";
import { reduxRouteComponent } from "redux-react-router";

import BoardApp from "./components/boardApp";
import About from "./components/about";
import store from "./store";
import * as reducers from "./reducers/index";
import { Router, Route, Link } from "./factories";


// The "layout" of the app
class App extends React.Component<any, any> {
    render() {
        return (
            div(null,
                h1(null, "Trehi"),
                Link({to: "/"}, "Home "),
                Link({to: "/about"}, " About"),
                this.props.children || BoardApp()
            )
        );
    }
}


@provide(store)
class Root extends React.Component<any, any> {
    render() {
        const { history, store } = this.props;
        return (
            Router({history: new history},
                Route({component: reduxRouteComponent(store)},
                    Route({path: "/", component: App},
                        Route({path: "about", component: About})
                    )
                )
            )
        );
    }
}

ReactDom.render(
    React.createElement(Root, {history: BrowserHistory, store: store}),
    document.getElementById("container")
);
