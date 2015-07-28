// This file holds our app typings

/// <reference path="../typings/all.d.ts" />


// BUSINESS LOGIC
export interface Card {
    id: number;
    name: string;
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
