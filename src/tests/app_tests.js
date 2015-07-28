var chai = require('chai');
var expect = chai.expect;

var app = require("../app/app.ts");


describe("Testing tests:", function() {
    it("is annoying", function(done) {
        expect(1 + 2).to.equal(3);
        done();
    });
    it("should work", function(done) {
        expect(app.test()).to.equal("hey");
        done();
    });
});
