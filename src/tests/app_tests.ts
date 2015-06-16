/// <reference path='../typings/tests.d.ts' />

import chai = require('chai');
var expect = chai.expect;

import { test } from "../app/app";


describe("Testing tests:", () => {
    it("is annoying", (done) => {
        expect(1 + 2).to.equal(3);
        done();
    });
    it("should work", (done) => {
        expect(test()).to.equal("hey");
        done();
    });
});
