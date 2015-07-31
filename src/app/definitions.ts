// This file holds our app typings

/// <reference path="../typings/all.d.ts" />


// BUSINESS LOGIC
export interface Card {
    id: number;
    name: string;
    position?: number; // Not present in the action, the reducer sets it
    boardId?: number;  // not in the model, added when adding a card
}

export interface Board {
    id: number;
    name: string;
    cards: Array<number>; // array of ids
}


// ACTION CREATORS


// ACTIONS


// STATES
export type BoardsState = {[key: string]:  Board};
export type CardsState = {[key: string]:  Card};
