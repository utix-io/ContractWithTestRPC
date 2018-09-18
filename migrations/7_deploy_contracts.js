const CrowdsaleTokenExt = artifacts.require("./CrowdsaleTokenExt.sol");
const FlatPricingExt = artifacts.require("./FlatPricingExt.sol");
const TokenVesting = artifacts.require("./TokenVesting.sol");
const SafeMathLibExt = artifacts.require("./SafeMathLibExt.sol");
const MintedTokenCappedCrowdsaleExt = artifacts.require("./MintedTokenCappedCrowdsaleExt.sol");

const constants = require("../test/constants");

const Web3 = require("web3");

let web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

const crowdsaleParams = [
    constants.crowdsale.start,
    constants.crowdsale.end,
    constants.crowdsale.minimumFundingGoal,
    constants.crowdsale.maximumSellableTokens,
    constants.crowdsale.isUpdatable,
    constants.crowdsale.isWhiteListed
];

module.exports = function(deployer, network, accounts) {
    crowdsaleParams.unshift(accounts[9]);
    crowdsaleParams.unshift(FlatPricingExt.address);
    crowdsaleParams.unshift(CrowdsaleTokenExt.address);
    crowdsaleParams.unshift("Utix Crowdsale");
    crowdsaleParams.push(TokenVesting.address);

    deployer.deploy(SafeMathLibExt).then(async () => {  
    await deployer.link(SafeMathLibExt, MintedTokenCappedCrowdsaleExt);
    await deployer.deploy(MintedTokenCappedCrowdsaleExt, ...crowdsaleParams);
    });
}