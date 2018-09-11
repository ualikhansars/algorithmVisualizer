import {assert, expect} from 'chai';
import PriorityQueue from '../../../client/dataStructures/queues/PriorityQueue';
import Random from '../../helpers/Random';

describe('PriorityQueue test', () => {
    let priorityQueue: PriorityQueue;
    let n1: any, n2: any, n3: any;

    before(() => {
        n1 = {key: 'n1', value: Random.getRandomInt(7, 10)};
        n2 = {key: 'n2', value: Random.getRandomInt(90, 100)};
        n3 = {key: 'n3', value: Random.getRandomInt(1, 2)};
        priorityQueue = new PriorityQueue();
        priorityQueue.insert(n1.key, n1.value);
        priorityQueue.insert(n2.key, n2.value);
        priorityQueue.insert(n3.key, n3.value);
    });

    describe('first extract min', () => {
        let min: any;
        before(() => {
            min = priorityQueue.extractMin();
        });
        it('min key is n3', () => {
            assert.equal(min.key, n3.key);
        })
        it('min value is n3 value', () => {
            assert.equal(min.value, n3.value);
        });
    });

    describe('update n1', () => {
        before(() => {
            priorityQueue.update(n1.key, 1000);
        });
        describe('second extract min', () => {
            let min: any;
            before(() => {
                min = priorityQueue.extractMin();
            });
            it('min key is n2', () => {
                assert.equal(min.key, n2.key);
            });
            it('min value is n2', () => {
                assert.equal(min.value, n2.value);
            });
        });
    });

    describe('third extract min', () => {
        let min: any;
        before(() => {
            min = priorityQueue.extractMin();
        });
        it('min key is n1', () => {
            assert.equal(min.key, n1.key);
        });
        it('min value is 1000', () => {
            assert.equal(min.value, 1000);
        });
    });
});