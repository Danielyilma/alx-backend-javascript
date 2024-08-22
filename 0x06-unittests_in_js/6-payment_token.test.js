const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai");

describe("test getPaymentTokenFromAPI", () => {
  it("is expected to return an object {data: 'Successful response from the API' }", (done) => {
    getPaymentTokenFromAPI(true).then((payment) => {
        expect(payment.data).to.be.equal('Successful response from the API')
        done()
    }).catch((err) => {
        done(err)
    })
  });
});
