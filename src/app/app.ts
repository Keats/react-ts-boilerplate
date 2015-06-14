/// <reference path="../typings/all.d.ts" />

import * as React from "react";
let {div} = React.DOM;

export function test() {
    return "hey"
}

React.render(
    div(null, "Hello world"),
    document.getElementById('container')
);

