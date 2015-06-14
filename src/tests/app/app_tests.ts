/// <reference path='../../typings/tests.d.ts' />

import chai = require('chai');
var expect = chai.expect;

import { test } from "../../app/app";


describe("Testing tests:", () => {
  it("should work", (done) => {
    expect(test()).to.equal("hey");
    done();
  });
});
