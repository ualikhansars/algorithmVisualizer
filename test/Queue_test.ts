import {assert, expect} from 'chai';
import Queue from '../client/dataStructures/queues/Queue';
import Random from './helpers/Random';

describe('Queue test', () => {

    let queue: Queue;
    let number1: number, number2: number, number3: number, number4: number, number5: number;

    before(() => {
        queue = new Queue();
        number1 = Random.getRandomInt();
        number2 = Random.getRandomInt();
        number3 = Random.getRandomInt();
        number4 = Random.getRandomInt();
        number5 = Random.getRandomInt();

        queue.enqueue(number1);
        queue.enqueue(number2);
        queue.enqueue(number3);
        queue.enqueue(number4);
        queue.enqueue(number5); 
    });

    it('desqueue returns number1', (done) => {
        const result = queue.dequeue();
        assert.equal(result, number1);
        done();
    });
    it('desqueue returns number2', (done) => {
        const result = queue.dequeue();
        assert.equal(result, number2);
        done();
    });
    it('desqueue returns number3', (done) => {
        const result = queue.dequeue();
        assert.equal(result, number3);
        done();
    });
    it('desqueue returns number4', (done) => {
        const result = queue.dequeue();
        assert.equal(result, number4);
        done();
    });
    it('desqueue returns number5', (done) => {
        const result = queue.dequeue();
        assert.equal(result, number5);
        done();
    });
});