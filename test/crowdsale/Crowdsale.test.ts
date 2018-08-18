import { CrowdsaleInstance } from "../../types/contracts";

const Crowdsale = artifacts.require("Crowdsale");

contract("Crowdsale", accounts => {
  let owner;
  let contractInstance: CrowdsaleInstance;
  beforeEach(async () => {
    owner = accounts[1];
    const initialAmount = 1000;
    contractInstance = await Crowdsale.new(initialAmount, { from: owner });
  });

  describe("Creation", () => {
    it("should set an initial amount when created ", async () => {
      const expectedInitialAmount = 1000;

      const initialAmount = await contractInstance.initialAmount();

      assert.equal(initialAmount.toNumber(), expectedInitialAmount);
    });
  });
});
