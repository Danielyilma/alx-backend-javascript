const utils = require("./utils");
const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");

describe("test sendpaymentrequestapi function", () => {
  it("should be called with SUM, 100, 20 args", () => {
    const calculateStub = sinon.stub(utils, "calculateNumber");
    const consoleSpy = sinon.stub(console, "log");
    calculateStub.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(calculateStub.calledOnce).to.be.true;
    expect(calculateStub.calledWith("SUM", 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith("The total is: 10")).to.be.true;
  });
});
