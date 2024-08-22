const utils = require("./utils");
const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");

describe("test sendpaymentrequestapi function", () => {

  it("should call calculateNumber once", () => {
    const spyCalculate = sinon.spy(utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(spyCalculate.calledOnce).to.be.true;

    spyCalculate.restore()
  });

  it("should call calculateNumber with SUM, 100, 20 args", () => {
    const spyCalculate = sinon.spy(utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(spyCalculate.calledWith('SUM', 100, 20)).to.be.true;

    spyCalculate.restore()
  });
});
