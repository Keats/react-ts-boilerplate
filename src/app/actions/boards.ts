import { ADD_CARD_TO_BOARD } from "../constants/actionTypes";

export function addCardToBoard(boardId: number, cardId: number): any {
    return {
        type: ADD_CARD_TO_BOARD,
        payload: {
            boardId,
            cardId
        }
    }
}
