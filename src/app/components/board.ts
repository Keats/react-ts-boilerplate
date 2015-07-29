import * as React from "react";
let { div, button, h2, input, br } = React.DOM;
import { addCard } from "../actions/cards";
import { connect } from "react-redux";

import Card from "./card";
import { getIntersection } from "../utils/misc";
import * as D from "../definitions";


interface BoardProps {
    board: D.Board;
    cards?: any;
    dispatch?: Function;
}


// TODO: Once react-redux allows more customization, push cards
// filtering in connect
@connect((state: any) => ({
    cards: state.cards
}))
export class BoardComponent extends React.Component<BoardProps, any> {
    addCard() {
        let cardInput = React.findDOMNode<HTMLInputElement>(this.refs["cardName"]);
        const name = cardInput.value;
        this.props.dispatch(addCard(this.props.board.id, name));
        cardInput.value = "";

    }

    render() {
        const cards = this.renderCards();
        return div(null,
            h2(null, this.props.board.name),
            ...cards,
            br(),
            div(null,
                input({type: "text", ref: "cardName"}),
                button({onClick: this.addCard.bind(this)}, "Add card")
            )
        );
    }

    renderCards(): Array<React.ReactElement<any>> {
        const cards = getIntersection<D.Card>(this.props.cards, this.props.board.cards);

        return cards.map((card) => {
           return Card({card: card, dispatch: this.props.dispatch})
        });
    }
}

const Board = React.createFactory(BoardComponent);
export default Board;
