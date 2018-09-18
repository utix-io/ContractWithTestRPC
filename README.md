PS D:\Utix Workspace\UtixTokenSmartContract> truffle test
Using network 'test'.

Deploy Successful


  Contract: CrowdsaleTokenExt
    √ should reject setReservedTokensListMultiple another call (53ms)
    √ should get number of reserved tokens for investor : 70000000000000000000000000 (38ms)
    √ should get reserved tokens in percentage unit for investor : 0
    √ should get mint agent: crowdsale contract
    √ should get mint agent: ReservedTokensFinalizeAgent contract
    √ should get release agent
    √ should allow claiming tokens (1259ms)

  Contract: FlatPricingExt
    √ should return rate of pricing strategy contract (73ms)
    √ should reject update rate transaction (it can be done only from crowdsale contract)
    √ should reject set tier transaction (because we already set it)
getEthInCents : 21611
    √ should return Eth in Cents

  Contract: MintedTokenCappedCrowdsaleExt 1 tier
    √ should get rate (389ms)
    √ shouldn't set finalize agent once more
    √ shouldn't set pricing strategy once more
    √ shouldn't update rate
    √ shouldn't update max cap (39ms)
    √ shouldn't set startsAt (40ms)
    √ should get last tier tier for crowdsale contract (56ms)
    √ should get name of crowdsale
    √ should get finalize agent
    √ should get pricing strategy
    √ should get isTierJoined
    √ should get tier position
    √ should allow adding an address to the whitelist with a minCap and the maxCap (126ms)
    √ should get early participant white list
    √ checks, that addresses are whitelisted
    √ checks, that address is not whitelisted
    √ should not add an address to the whitelist that was already added (74ms)
    √ shouldn't accept investment from not whitelisted user (94ms)
    √ shouldn't accept investment from whitelisted user less than minCap (131ms)
    √ shouldn't accept investment from whitelisted user more than maxCap (119ms)
    √ should accept buy from whitelisted user 1 within cap range (245ms)
    √ should return updated balance of multisig (236ms)
    √ should return correct token's balance of user
    √ should accept buy from whitelisted user 2 within cap range (223ms)
    √ should return updated balance of multisig (332ms)
    √ should return correct token's balance of user (39ms)
    √ should accept buy less than minCap at second buy (239ms)
    √ should return updated balance of multisig (296ms)
    √ should return correct token's balance of user (38ms)
    √ shouldn't accept investment from whitelisted user that exceeds maxCap, when maxCap is not sold yet (122ms)
    √ shouldn't accept investment from whitelisted user that exceeds maxCap, when maxCap is already sold (163ms)
    √ should get the count of whitelisted participants
    √ should get the whitelist participant from the array
    √ should not allow adding the 0 address to the whitelist
    √ should not allow adding an address to the whitelist with a minCap greater than the maxCap (38ms)
    √ should not allow adding an address to the whitelist with a maxCap of 0
    √ can distribute reserved tokens should be false (60ms)
    √ should set endsAt (86ms)
    √ should not set endsAt, if crowdsale is already ended (2015ms)
    √ can distribute reserved tokens shoul be true (70ms)
    √ should get allocate agent: ReservedTokensFinalizeAgent Address
    √ should fail finalize (66ms)
    √ should fail distribution of reserved tokens with 0 batch (60ms)
    √ should distribute 1st batch of reserved tokens (576ms)
    √ should return that reserved tokens are distributed for one address
    √ should return that not all reserved tokens are distributed
    √ should fail finalize (67ms)
    √ should distribute reserved tokens (826ms)
    √ should return that all reserved tokens are distributed
    √ should fail distribution of reserved tokens (90ms)
    √ should can not distribute reserved tokens (226ms)
    √ should finalize crowdsale (231ms)
    √ should get allocate agent: crowdsale contract (110ms)
    √ should get allocate agent: Owner
    √ checks, that addresses are set to vesting (71ms)
    √ should get vesting Map for 1st account before changeFreezed to true
    √ should set the changeFreezed to true (58ms)
    √ should get vesting Map for 1st Accocunt
    √ should get vesting Map for 2nd account before changeFreezed to true
    √ should set the changeFreezed to true (38ms)
    √ should get vesting Map for 2nd Accocunt
    √ Release 1st step vested tokens for 1st Accocunt (5002ms)
    √ Release 2nd step vested tokens for 1st Accocunt (5015ms)
    √ Release 3rd step vested tokens for 1st Accocunt (5005ms)
    √ Release 4th step vested tokens for 1st Accocunt (5039ms)
    √ Release 4th step vested tokens for 2nd Accocunt (5000ms)
    √ Vested address 1 updated token balance (43ms)
    √ Vested address 2 updated token balance

  Contract: SafeMathLibExt
    √ should accurately multiply numbers
    √ should accurately divide numbers
    √ should accurately subtract numbers
    √ should accurately add numbers


  83 passing (39s)
