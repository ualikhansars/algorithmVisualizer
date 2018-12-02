import {assert} from 'chai';
import BinarySearchTree from '../client/dataStructures/trees/BinarySearchTree';
import Random from './helpers/Random';

describe('BinarySearchTree test', () => {
    let binarySearchTree: BinarySearchTree;
    let number1: number, number2: number, number3: number, number4: number, number5: number;

    before(() => {
        binarySearchTree = new BinarySearchTree();
        number1 = Random.getRandomInt(1, 20);
        number2 = Random.getRandomInt(-100, 0);
        number3 = Random.getRandomInt(50, 100);
        number3 = Random.getRandomInt(21, 49);
    });

    describe('insert number1', () => {
        let number1SearchResult: any;
        before(() => {
            binarySearchTree.insert(number1);
            number1SearchResult = binarySearchTree.search(number1);
        });
        it('number1SearchResult key is equal to number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('found node does not have parent element so it is a root of a tree', () => {
            assert.equal(number1SearchResult.p, null);
        });
        it('found node does not have left child element', () => {
            assert.equal(number1SearchResult.left, null);
        });
        it('found node does not have right child element', () => {
            assert.equal(number1SearchResult.right, null);
        });
    });

    describe('insert number2', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        before(() => {
            binarySearchTree.insert(number2);
            number1SearchResult = binarySearchTree.search(number1);
            number2SearchResult = binarySearchTree.search(number2);
        });
        it('number1SearchResult key is equal to number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult is root element', () => {
            assert.equal(number1SearchResult.p, null);
        });
        it('number1SearchResult left element key is number2', () => {
            assert.equal(number1SearchResult.left.key, number2);
        });
        it('number1SearchResult does not have right element', () => {
            assert.equal(number1SearchResult.right, null);
        });
        it('number2SearchResult key is equal to number2', () => {
            assert.equal(number2SearchResult.key, number2);
        });
        it('number2SearchResult parent element key is number1', () => {
            assert.equal(number2SearchResult.p.key, number1);
        });
        it('number2SearchResult does not have left child element', () => {
            assert.equal(number2SearchResult.left, null);
        });
        it('number2SearchResult does not have right child element', () => {
            assert.equal(number2SearchResult.right, null);
        });
    });

    describe('insert number3', () => {
        let number1SearchResult: any;
        let number2SearchResult: any;
        let number3SearchResult: any;
        before(() => {
            binarySearchTree.insert(number3);
            number1SearchResult = binarySearchTree.search(number1);
            number2SearchResult = binarySearchTree.search(number2);
            number3SearchResult = binarySearchTree.search(number3);
        });
        it('number1SearchResult key is equal to number1', () => {
            assert.equal(number1SearchResult.key, number1);
        });
        it('number1SearchResult is root element', () => {
            assert.equal(number1SearchResult.p, null);
        });
        it('number1SearchResult left element key is number2', () => {
            assert.equal(number1SearchResult.left.key, number2);
        });
        it('number1SearchResult right element key is number3', () => {
            assert.equal(number1SearchResult.right.key, number3);
        });
        it('number2SearchResult key is equal to number2', () => {
            assert.equal(number2SearchResult.key, number2);
        });
        it('number2SearchResult parent element key is number1', () => {
            assert.equal(number2SearchResult.p.key, number1);
        });
        it('number2SearchResult does not have left child element', () => {
            assert.equal(number2SearchResult.left, null);
        });
        it('number2SearchResult does not have right child element', () => {
            assert.equal(number2SearchResult.right, null);
        });
        it('number3SearchResult key is equal to number3', () => {
            assert.equal(number3SearchResult.key, number3);
        });
        it('number3SearchResult parent key is number1', () => {
            assert.equal(number3SearchResult.p.key, number1);
        });
        it('number2SearchResult does not have left element', () => {
            assert.equal(number3SearchResult.left, null);
        });
        it('number2SearchResult does not have right element', () => {
            assert.equal(number3SearchResult.right, null);
        });
    });
});