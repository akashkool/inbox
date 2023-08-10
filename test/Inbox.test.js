const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');


// creating instance of Web3 class with ganache provider.
// we may use other provider like RinkeBy, Ethereum ,Polygon etc  with Web3 class.
const web3 = new Web3(ganache.provider());

class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
}

let car;

beforeEach(()=>{
    car = new Car();
})
describe('Car',()=>{
    it('can park',()=>{
        assert.equal(car.park(),'stopped');
    })
    it('can drive',()=>{
        assert.equal(car.drive(),'vroom');
    })
})

