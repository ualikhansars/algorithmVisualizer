import {assert} from 'chai';
import DoublyLinkedList from '../client/dataStructures/linkedLists/DoublyLinkedList';
import Random from './helpers/Random';

describe('DoublyLinkedList test', () => {

    let doublyLinkedList: DoublyLinkedList;
    let number1: number, number2: number, number3: number;

    before(() => {
        doublyLinkedList = new DoublyLinkedList();
        number1 = Random.getRandomInt();
        number2 = Random.getRandomInt();
        number3 = Random.getRandomInt();
    });

    describe('insert number1', () => {
        let number1SearchResult: any;
        before(() => {
            doublyLinkedList.insert(number1);
            number1SearchResult = doublyLinkedList.search(number1);
        });
        it('number1SearchResult key is equal to number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult prev is equal to null', () => {
            assert.equal(number1SearchResult.prev, null);
        });
        it('number1SearchResult next is equal to null', () => {
            assert.equal(number1SearchResult.next, null);
        });
    });

    describe('insert number2', () => {
        let number2SearchResult: any;
        before(() => {
            doublyLinkedList.insert(number2);
            number2SearchResult = doublyLinkedList.search(number2);
        });
        it('number2SearchResult key is equal to number2', () => {
            assert.equal(number2SearchResult.key, number2);
        });
        it('number2SearchResult prev is null', () => {
            assert.equal(number2SearchResult.prev, null);
        });
        it('number2SearchResult next key is equal to number1', () => {
            assert.equal(number2SearchResult.next.key, number1);
        });
        it('number1 object prev should point to number2', () => {
            assert.equal(number2SearchResult.next.prev.key, number2);
        });
    });

    describe('insert number3', () => {
        let number3SearchResult: any;
        before(() => {
            doublyLinkedList.insert(number3);
            number3SearchResult = doublyLinkedList.search(number3);
        });
        it('number3SearchResult key is equal to number3', () => {
            assert.equal(number3SearchResult.key, number3);
        });
        it('number3SearchResult prev is null', () => {
            assert.equal(number3SearchResult.prev, null);
        });
        it('number3SearchResult next key is equal to number2', () => {
            assert.equal(number3SearchResult.next.key, number2);
        });
        it('number2 object prev should point to number3', () => {
            assert.equal(number3SearchResult.next.prev.key, number3);
        });
    });

    describe('delete number2 from the list', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        let number3SearchResult: any;
        before(() => {
            doublyLinkedList.delete(number2);
            number1SearchResult = doublyLinkedList.search(number1);
            number2SearchResult = doublyLinkedList.search(number2);
            number3SearchResult = doublyLinkedList.search(number3);
        });
        it('number1 object should be the tail of the list', () => {
            assert.equal(number1SearchResult.next, null);
        });
        it('number1SearchResult key is number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult prev points to number3', () => {
            assert.equal(number1SearchResult.prev.key, number3);
        });
        it('number3 should be the head of the list', () => {
            assert.equal(number3SearchResult.prev, null);
        });
        it('number3SearchResult key is number3', () => {
            assert.equal(number3SearchResult.key, number3);
        });
        it('number3SearchResult next points to number1', () => {
            assert.equal(number3SearchResult.next.key, number1);
        });
    });

    describe('delete number3', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        let number3SearchResult: any;
        before(() => {
            doublyLinkedList.delete(number3);
            number1SearchResult = doublyLinkedList.search(number1);
            number2SearchResult = doublyLinkedList.search(number2);
            number3SearchResult = doublyLinkedList.search(number3);
        });
        it('number1 object is the head of the list', () => {
            assert.equal(number1SearchResult.prev, null);
        });
        it('number1 object is simultaneously the tail of the list', () => {
            assert.equal(number1SearchResult.next, null);
        });
        it('number1SearchResult key is number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number2SearchResult is null', () => {
            assert.equal(number2SearchResult, null);
        });
        it('number3SearchResult is null', () => {
            assert.equal(number3SearchResult, null);
        });
    });

    describe('delete number1', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        let number3SearchResult: any;
        before(() => {
            doublyLinkedList.delete(number1);
            number1SearchResult = doublyLinkedList.search(number1);
            number2SearchResult = doublyLinkedList.search(number2);
            number3SearchResult = doublyLinkedList.search(number3);
        });
        it('number1SearchResult is null', () => {
            assert.equal(number1SearchResult, null);
        });
        it('number2SearchResult is null', () => {
            assert.equal(number2SearchResult, null);
        });
        it('number3SearchResult is null', () => {
            assert.equal(number3SearchResult, null);
        });
    });

    describe('insert back number1 test', () => {
        let number1SearchResult: any;
        before(() => {
            doublyLinkedList.insertBack(number1);
            number1SearchResult = doublyLinkedList.search(number1);
        });
        it("number1SearchResult key is number1", () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult prev is null', () => {
            assert.equal(number1SearchResult.prev, null);
        });
        it('number1SearchResult next is null', () => {
            assert.equal(number1SearchResult.next, null);
        });
    });

    describe('insert back number2', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        before(() => {
            doublyLinkedList.insertBack(number2);
            number1SearchResult = doublyLinkedList.search(number1);
            number2SearchResult = doublyLinkedList.search(number2);
        });
        it("number1SearchResult key is number1", () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult prev is null', () => {
            assert.equal(number1SearchResult.prev, null);
        });
        it('number1SearchResult next key is number2', () => {
            assert.equal(number1SearchResult.next.key, number2);
        });
        it('number2SearchResult key is number2', () => {
            assert.equal(number2SearchResult.key, number2);
        });
        it('number2SearchResult prev key is number1', () => {
            assert.equal(number2SearchResult.prev.key, number1);
        });
        it('number2SearchResult next is null', () => {
            assert.equal(number2SearchResult.next, null);
        });
    });

    describe('insert number3', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        let number3SearchResult: any;
        before(() => {
            doublyLinkedList.insertBack(number3);
            number1SearchResult = doublyLinkedList.search(number1);
            number2SearchResult = doublyLinkedList.search(number2);
            number3SearchResult = doublyLinkedList.search(number3);
        });
        it("number1SearchResult key is number1", () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult prev is null', () => {
            assert.equal(number1SearchResult.prev, null);
        });
        it('number1SearchResult next key is number2', () => {
            assert.equal(number1SearchResult.next.key, number2);
        });
        it('number2SearchResult key is number2', () => {
            assert.equal(number2SearchResult.key, number2);
        });
        it('number2SearchResult prev key is number1', () => {
            assert.equal(number2SearchResult.prev.key, number1);
        });
        it('number2SearchResult next key is number3', () => {
            assert.equal(number2SearchResult.next.key, number3);
        });
        it('number3SearchResult key is number3', () => {
            assert.equal(number3SearchResult.key, number3);
        });
        it('number3SearchResult prev key is number2', () => {
            assert.equal(number3SearchResult.prev.key, number2);
        });
        it('number3SearchResult next is null', () => {
            assert.equal(number3SearchResult.next, null);
        });
    });
});