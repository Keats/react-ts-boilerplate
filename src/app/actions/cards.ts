import { CREATE_CARD, REMOVE_CARD } from "../constants/actionTypes";


function addCardOptimistic(data: Object) {
    return {
        type: CREATE_CARD,
        payload: data
    }
}

export function addCard(boardId: number, name: string) {    
    // Generate a random id, would be more complex in a real app
    const id = Math.floor((Math.random() * 1000) + 1);
    return {
        type: CREATE_CARD,
        payload: {boardId, id, name}
    };
}
