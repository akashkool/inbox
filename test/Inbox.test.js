const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');


// creating instance of Web3 class with ganache provider.
// we may use other provider like RinkeBy, Ethereum ,Polygon etc  with Web3 class.
const web3 = new Web3(ganache.provider());

beforeEach(()=>{
    // get a list of all account & use one of the account to deploy smart contract.
    // eth stands for ethereum.
    web3.eth.getAccounts().then(fetchedAccounts=>{
        console.log(fetchedAccounts)
    })
})
describe('Car',()=>{
    it('deploys a contract',()=>{

    })
})

