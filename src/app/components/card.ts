import * as React from "react";
let { div, p, button } = React.DOM;
import { bindActionCreators } from "redux";
import { Connector } from "react-redux";

import * as D from "../definitions";


interface CardProps {
    card: D.Card;
    dispatch: Function;
}


export class CardComponent extends React.Component<CardProps, any> {
    render() {
        return div(null,
            p(null, this.props.card.name),
            button(null, "Delete")
        );
    }
}

const Card = React.createFactory(CardComponent);
export default Card;
