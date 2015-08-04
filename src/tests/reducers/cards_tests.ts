/// <reference path='../../typings/tests.d.ts' />

import { expect } from 'chai';

import * as actionTypes from "../../app/constants/actionTypes";
import cards from "../../app/reducers/cards";


describe("Cards reducer:", () => {
	it("should be able to add a card", (done) => {
		const addCardAction = {
			type: actionTypes.CREATE_CARD,
			payload: {
				boardId: 7,
				id: 42,
				name: "Hello world"
			}
		}
		const state = cards(null, addCardAction);
		expect(Object.keys(state).length).to.equal(1);
		expect(state[7]).to.not.be.undefined;
		expect(state[7].length).to.equal(1);
		expect(state[7][0].name).to.equal("Hello world");
		done();
	});
});