import { CREATE_CARD, REMOVE_CARD } from "../constants/actionTypes";
import { addCardToBoard } from "./boards";


function fakePromise(data: Object) {
    return () => {
        setTimeout(() => {
            // Faking failed request
            const failed = Math.floor(Math.random()) === 0.1;
            if (failed) {

            } else {

            }
        }, 100);
    };
}

function addCardOptimistic(data: Object) {
    return {
        type: CREATE_CARD,
        payload: data
    }
}

export function addCard(boardId: number, name: string) {
    return (dispatch: Function) => {
        // Generate a random id, would be more complex in a real app
        const id = Math.floor((Math.random() * 1000) + 1);
        const cardData = {boardId, id, name};

        dispatch(addCardOptimistic(cardData));
        dispatch(addCardToBoard(boardId, id));
    };
}