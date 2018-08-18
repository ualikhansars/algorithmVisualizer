import {assert, expect} from 'chai';
import Stack from '../client/dataStructures/stack/Stack';
import Random from './helpers/Random';

describe('Stack test', () => {

    let stack: Stack;
    let number1: number, number2: number, number3: number, number4: number, number5: number;


    before(() => {
        stack = new Stack();
        number1 = Random.getRandomInt();
        number2 = Random.getRandomInt();
        number3 = Random.getRandomInt();
        number4 = Random.getRandomInt();
        number5 = Random.getRandomInt();

        stack.push(number1);
        stack.push(number2);
        stack.push(number3);
        stack.push(number4);
        stack.push(number5); 
    });
    
    it("stack returns number5", (done) => {
        let result = stack.pop();
        assert.equal(result, number5);
        done();
    });

    it("stack returns number4", (done) => {
        let result = stack.pop();
        assert.equal(result, number4);
        done();
    });

    it("stack returns number3", (done) => {
        let result = stack.pop();
        assert.equal(result, number3);
        done();
    });

    it("stack returns number2", (done) => {
        let result = stack.pop();
        assert.equal(result, number2);
        done();
    });

    it("stack returns number1", (done) => {
        let result = stack.pop();
        assert.equal(result, number1);
        done();
    });
});