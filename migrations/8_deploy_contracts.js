const CrowdsaleTokenExt = artifacts.require("./CrowdsaleTokenExt.sol");
const MintedTokenCappedCrowdsaleExt = artifacts.require("./MintedTokenCappedCrowdsaleExt.sol");
const SafeMathLibExt = artifacts.require("./SafeMathLibExt.sol");
const ReservedTokensFinalizeAgent = artifacts.require("./ReservedTokensFinalizeAgent.sol");

module.exports = function (deployer) {
    let reservedTokensFinalizeAgentParams = [];
    reservedTokensFinalizeAgentParams.push(CrowdsaleTokenExt.address);
    reservedTokensFinalizeAgentParams.push(MintedTokenCappedCrowdsaleExt.address);

    deployer.deploy(SafeMathLibExt).then(async () => {  
        await deployer.link(SafeMathLibExt, ReservedTokensFinalizeAgent);
        await deployer.deploy(ReservedTokensFinalizeAgent, ...reservedTokensFinalizeAgentParams);    
    });
}