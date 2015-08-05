// LIBS DEFINITION
/// <reference path="react.d.ts"/>
/// <reference path="lodash.d.ts"/>
/// <reference path="redux.d.ts"/>


// API is supposed to be changing soon so dummy definitions
// https://github.com/acdlite/redux-react-router/issues/1
declare module "redux-react-router" {
    function reduxRouteComponent(store: any): any;
    function routerStateReducer(): any;
}

// Too many new packages dammit
declare module "react-dom" {
    function render(component: any, target: any): void;
}

// Dummy react-router 1.0 definition
declare module "react-router" {
    import React = require("react");

    export class Router extends React.Component<any, any> {}
    export class Route extends React.Component<any, any> {}
    export class Link extends React.Component<any, any> {}
}

// It never stops
declare module "react-router/lib/BrowserHistory" {
    export default class BrowserHistory{}
}
