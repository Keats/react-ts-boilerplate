import * as D from "../definitions";


const initialState: D.BoardsState  = {
    0: {
        id: 0,
        name: "A board",
        cards: []
    }
};


export default function cards(state: D.BoardsState, action: any): D.BoardsState {
    state = state || initialState;
    return state;
}
