const Token = artifacts.require("./Token");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("Token", (accounts) => {
  describe("deployment", () => {
    it("tracks the name", async () => {
      const token = await Token.new();
      const address = await token.address;
      address.should.not.equal(null);
    });
  });
});
