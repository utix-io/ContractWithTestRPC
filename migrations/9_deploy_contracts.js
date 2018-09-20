
const CrowdsaleTokenExt = artifacts.require("./CrowdsaleTokenExt.sol");
const MintedTokenCappedCrowdsaleExt = artifacts.require("./MintedTokenCappedCrowdsaleExt.sol");
const SafeMathLibExt = artifacts.require("./SafeMathLibExt.sol");
const FlatPricingExt = artifacts.require("./FlatPricingExt.sol");
const ReservedTokensFinalizeAgent = artifacts.require("./ReservedTokensFinalizeAgent.sol");
const TokenVesting = artifacts.require("./TokenVesting.sol");

const constants = require("../test/constants");

const Web3 = require("web3");

let web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

module.exports = function(deployer, network, accounts) {
    
    deployer.then(() => {
        Promise.all([CrowdsaleTokenExt.deployed(), 
                     FlatPricingExt.deployed(), 
                     MintedTokenCappedCrowdsaleExt.deployed(),
                     TokenVesting.deployed()
                    ]).then(results => {
            var crowdsaleTokenExt = results[0];
            var flatPricingExt = results[1];
            var mintedTokenCappedCrowdsaleExt = results[2];
            var tokenVesting = results[3];
            
            return Promise.all([
                crowdsaleTokenExt.setReservedTokensListMultiple(
                    [accounts[3],accounts[7]],
                    [constants.reservedTokens.number,constants.reservedTokens.number],
                    [constants.reservedTokens.percentageUnit,constants.reservedTokens.percentageUnit],
                    [constants.reservedTokens.percentageDecimals,constants.reservedTokens.percentageDecimals],
                    [true,false]
                ),
                mintedTokenCappedCrowdsaleExt.setEarlyParticipantWhitelistMultiple(
                    [accounts[0]],
                    [constants.whiteListItem.status],
                    [constants.whiteListItem.minCap],
                    [constants.whiteListItem.maxCap]
                ),                        
                flatPricingExt.setTier(MintedTokenCappedCrowdsaleExt.address),         
                mintedTokenCappedCrowdsaleExt.updateJoinedCrowdsalesMultiple([MintedTokenCappedCrowdsaleExt.address]),        
                crowdsaleTokenExt.setMintAgent(MintedTokenCappedCrowdsaleExt.address, true),
                crowdsaleTokenExt.setMintAgent(ReservedTokensFinalizeAgent.address, true),   
                mintedTokenCappedCrowdsaleExt.setFinalizeAgent(ReservedTokensFinalizeAgent.address),
                crowdsaleTokenExt.setReleaseAgent(ReservedTokensFinalizeAgent.address), 
                mintedTokenCappedCrowdsaleExt.setAllocateAgent(ReservedTokensFinalizeAgent.address, true),
                tokenVesting.setAllocateAgent(mintedTokenCappedCrowdsaleExt.address, true),
                tokenVesting.setAllocateAgent(accounts[0], true),
                crowdsaleTokenExt.setTransferAgent(tokenVesting.address, true)               
            ]);
        }).then(() => console.log('Deploy Successful')).catch(error => console.log('ERROR', error));
    });

}