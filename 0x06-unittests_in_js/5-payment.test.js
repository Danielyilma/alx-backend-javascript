const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");

describe("test sendPaymentRequestToAPI method", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it("call with 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it("call with 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
