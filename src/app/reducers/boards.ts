import * as _ from "lodash";

import { ADD_CARD_TO_BOARD, REMOVE_CARD_TO_BOARD } from "../constants/actionTypes";

import * as D from "../definitions";


const initialState: D.BoardsState  = {
    0: {
        id: 0,
        name: "A board",
        cards: []
    }
};


export function addCardToBoard(state: D.BoardsState, payload: any): D.BoardsState {
    const {boardId, cardId} = payload;
    const newState = _.cloneDeep(state);
    newState[boardId].cards.push(cardId);
    return newState;
}


export function removeCardToBoard(state: D.BoardsState, payload: any): D.BoardsState {
    return state;
}


export default function cards(state: D.BoardsState, action: any): D.BoardsState {
    state = state || initialState;
    switch (action.type) {
        case ADD_CARD_TO_BOARD:
            return addCardToBoard(state, action.payload);
        case REMOVE_CARD_TO_BOARD:
            return removeCardToBoard(state, action.payload);
        default:
            return state;
    }
}
