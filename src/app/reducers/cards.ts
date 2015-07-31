import * as _ from "lodash";

import * as D from "../definitions";
import { CREATE_CARD, REMOVE_CARD } from "../constants/actionTypes";


const initialState: D.CardsState = {};


export function addCard(state: D.CardsState, payload: any): D.CardsState {
    const {name, id, boardId} = payload;
    let newState = _.cloneDeep(state);
    newState[id] = {
        id,
        name,
        boardId,
        position: Object.keys(newState).length + 1
    };

    return newState;
}


export function removeCard(state: D.CardsState, action: any): D.CardsState {
    return state;
}


export default function cards(state: D.CardsState, action: any): D.CardsState {
    state = state || initialState;

    switch (action.type) {
        case CREATE_CARD:
            return addCard(state, action.payload);
        case REMOVE_CARD:
            return removeCard(state, action.payload);
        default:
            return state;
    }
}

