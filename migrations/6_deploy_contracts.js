const CrowdsaleTokenExt = artifacts.require("./CrowdsaleTokenExt.sol");
const TokenVesting = artifacts.require("./TokenVesting.sol");
const SafeMathLibExt = artifacts.require("./SafeMathLibExt.sol");

module.exports = function (deployer) {
    let tokenVestingParams = [];
    
    deployer.deploy(SafeMathLibExt).then(async () => {
    tokenVestingParams.push(CrowdsaleTokenExt.address);
    await deployer.link(SafeMathLibExt, TokenVesting);
    await deployer.deploy(TokenVesting, ...tokenVestingParams);
    });
}