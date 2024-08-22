const { expect } = require("chai");
const request = require("request");

describe("test api", () => {
  /**
   * testing / index route
   */

  describe("testing index page", () => {
    it("should return 200 status", (done) => {
      request("http://localhost:7865/", (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it("should return Welcome to the payment system body", (done) => {
      request("http://localhost:7865/", (err, res, body) => {
        // console.log(body)
        expect(body).to.be.equal("Welcome to the payment system");
        done();
      });
    });

    it("should return 200 status", (done) => {
      request("http://localhost:7865/", (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });
  });

  /**
   * testing /cart/id route
   */

  describe("cart payment", () => {
    it("should return 200 status if /cart/id id in number", (done) => {
      request("http://localhost:7865/cart/1", (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it("should return 404 status if /cart/id id in not number", (done) => {
      request("http://localhost:7865/cart/one", (err, res, body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
