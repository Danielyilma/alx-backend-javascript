const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("testing adder function", () => {
  describe("calculateNumber", () => {
    it('calculateNumber should add 2 numbers', () => {
        let result = calculateNumber(1, 2)
        assert.equal(result, 3)
    })

    it("calculateNumber should round the number before adding", () => {
      let result = calculateNumber(2.5, 5);
      assert.equal(result, 8);
    });

    it("calculateNumber should round the number before adding", () => {
        let result = calculateNumber(0.5, 5);
        assert.equal(result, 6);
    });

    it("add 2 negative number", () => {
        let result = calculateNumber(-2, -5);
        assert.equal(result, -7);
    });

    it("add postive and nagative", () => {
        let result = calculateNumber(-2, 5);
        assert.equal(result, 3);
    });

    it("add zero with postive number", () => {
        let result = calculateNumber(0, 5);
        assert.equal(result, 5);
    });

    it("add zero with negative number", () => {
        let result = calculateNumber(0, -5);
        assert.equal(result, -5);
    });

    it("add negative float with postive integer", () => {
        let result = calculateNumber(-2.5, 5);
        assert.equal(result, 3);
    });

    it("add negative integer with postive float", () => {
        let result = calculateNumber(2.5, -5);
        assert.equal(result, -2);
    });

    it("add two negative float number", () => {
        let result = calculateNumber(2.5, 5);
        assert.equal(result, 8);
    });

    it("add 2 postive float", () => {
        let result = calculateNumber(2.5, 5.3);
        assert.equal(result, 8);
    });
  });
});
