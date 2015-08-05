// Most libraries export JSX components but we don't use
// JSX so we need to wrap them in React.createFactory()
// This file contains all of the third party components
import * as React from "react";
import {
    Router as RouterComponent,
    Route as RouteComponent,
    Link as LinkComponent
} from "react-router";

const Router = React.createFactory(RouterComponent);
const Route = React.createFactory(RouteComponent);
const Link = React.createFactory(LinkComponent);

export {
    Router,
    Route,
    Link
};
