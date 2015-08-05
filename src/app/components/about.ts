import * as React from "react";
let { div, h3, p } = React.DOM;


class AboutComponent extends React.Component<any, any> {
    render() {
        return div(null,
            h3(null, "About"),
            p(null, "A redux/typescript/react-router demo")
        );
    }
}
// This one doesn't need a factory for some reason
// TODO: investigate
export default AboutComponent;
