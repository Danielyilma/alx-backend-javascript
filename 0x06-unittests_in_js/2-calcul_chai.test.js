const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai')

describe("testing calculateNumber function", () => {
  /**
   * testing the type SUM paramenter
   */

  describe("test type SUM", () => {
    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 0, 0);
      expect(result).to.eq(0);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 0.2, 0);
      expect(result).to.eq(0);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 1, 0);
      expect(result).to.eq(1);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", -1, 0);
      expect(result).to.eq(-1);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 1, 1);
      expect(result).to.eq(2);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 1, 1.0);
      expect(result).to.eq(2);
    });

    it("test type SUM ", () => {
      let result = calculateNumber("SUM", 3.51, 2.46);
      expect(result).to.eq(6);
    });
  });

  /**
   * testing the type SUBTRACT paramenter
   */

  describe("test type SUBTRACT", () => {
    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", 0, 0);
      expect(result).to.eq(0);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", 1, 1);
      expect(result).to.eq(0);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", 1.9, 2.4);
      expect(result).to.eq(0);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", 1.9, -2.4);
      expect(result).to.eq(4);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", 0, -2.4);
      expect(result).to.eq(2);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("SUBTRACT", -1, -1);
      expect(result).to.eq(0);
    });

    it("test type SUBTRACT ", () => {
      let result = calculateNumber("DIVIDE", 1, 1);
      expect(result).to.eq(1);
    });
  });

  /**
   * testing the type DIVIDE paramenter
   */

  describe("test type DIVIDE", () => {
    it("test type DIVIDE ", () => {
      let result = calculateNumber("DIVIDE", 0, 0);
      expect(result).to.eq("Error");
    });

    it("test type DIVIDE ", () => {
      let result = calculateNumber("DIVIDE", 1.5, 1.4);
      expect(result).to.eq(2);
    });

    it("test type DIVIDE ", () => {
      let result = calculateNumber("DIVIDE", -2.5, -1.1);
      expect(result).to.eq(2);
    });

    it("test type DIVIDE ", () => {
      let result = calculateNumber("DIVIDE", 1, -0.5);
      expect(result).to.eq("Error");
    });

    it("test type DIVIDE ", () => {
      let result = calculateNumber("DIVIDE", -1, -1);
      expect(result).to.eq(1);
    });
  });
});
