import * as React from "react";
let { div, button } = React.DOM;
import { connect } from "react-redux";

import * as D from "../definitions";
import Board from "./board";


interface BoardAppProps {
    boards: D.BoardsState;
    dispatch: Function;
}

@connect((state: any) => ({
    boards: state.boards
}))
export class BoardAppComponent extends React.Component<BoardAppProps, any> {
    render() {
        return div(null, ...this.renderBoards());
    }

    renderBoards(): Array<React.ReactElement<any>> {
        return Object.keys(this.props.boards).map((key) => {
            return Board({board: this.props.boards[key]});
        });
    }
}

const BoardApp = React.createFactory(BoardAppComponent);
export default BoardApp;
