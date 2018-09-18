const SafeMathLibExt = artifacts.require("./SafeMathLibExt.sol");
const FlatPricingExt = artifacts.require('./FlatPricingExt.sol');
const ETHUSD = artifacts.require('./ETHUSD.sol');

const pricingStrategyParams = [
      10
];


module.exports = function (deployer) {
      deployer.deploy(SafeMathLibExt).then(async () => {          
            //pricingStrategyParams.push("0x4a14b5ee91857891bc00936d155b03efb88ef028");  
            pricingStrategyParams.push(ETHUSD.address);
            await deployer.link(SafeMathLibExt, FlatPricingExt);
            await deployer.deploy(FlatPricingExt, ...pricingStrategyParams);
        });
};

