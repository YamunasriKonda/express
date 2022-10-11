const fact = require("./revfrac");
const { expect } = require("chai");

describe("Factorial Testing", () => {
    it("should equal 5!", () => {
        expect(fact(120)).to.equal("5!");

    })
    it("should equal none", () => {
        expect(fact(150)).to.equal("none");
    })
})

