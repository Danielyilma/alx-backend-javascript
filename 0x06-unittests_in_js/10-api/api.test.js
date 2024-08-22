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
    it("should return 200 status if /cart/id id is number", (done) => {
      request("http://localhost:7865/cart/1", (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it("should return 400 status if /cart/id id is not number", (done) => {
      request("http://localhost:7865/cart/one", (err, res, body) => {
        expect(res.statusCode).to.be.equal(400);
        done();
      });
    });
  });

  /**
   * test /login route
   */

  describe("login user", () => {
    it("should return Welcome username", (done) => {
      request.post(
        { url: "http://localhost:7865/login", form: { userName: "tony" } },
        (err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal("Welcome tony");
          done();
        }
      );
    });
  });

  /**
   * test /available_payments  route
   */

  describe("available payment json", () => {
    it("should return json", (done) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      request("http://localhost:7865/available_payments", (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.be.deep.equal(expected);
        done();
      });
    });
  });
});
