import {assert} from 'chai';
import AdjListGraph from '../client/dataStructures/graphs/AdjListGraph';
import Random from './helpers/Random';

describe('AdjListGraph test', () => {
    let adjListGraph: AdjListGraph;
    let number1: number, number2: number, number3: number, number4: number;

    before(() => {
        number1 = Random.getRandomInt(1, 5);
        number2 = Random.getRandomInt(6, 10);
        number3 = Random.getRandomInt(11, 15);
        number4 = Random.getRandomInt(16, 20);
        adjListGraph = new AdjListGraph([number1,number2,number3,number4]);
    });

    describe('add edges for vertice number1', () => {
        let number1ListNode: any;
        let number2ListNode: any;
        let number3ListNode: any;
        before(() => {
            adjListGraph.addEdge(number1, number2);
            adjListGraph.addEdge(number1, number3);
            number1ListNode = adjListGraph.adj[number1].search(number1);
            number2ListNode = adjListGraph.adj[number1].search(number2);
            number3ListNode = adjListGraph.adj[number1].search(number3);
        });
        it('number1ListNode key is number1', () => {
            assert.equal(number1ListNode.key, number1);
        });
        it('number1ListNode is the head of the list', () => {
            assert.equal(number1ListNode.prev, null);
        });
        it('number1ListNode next key is number2', () => {
            assert.equal(number1ListNode.next.key, number2);
        });
        it('number2ListNode key is number2', () => {
            assert.equal(number2ListNode.key, number2);
        });
        it('number2ListNode prev key is number1', () => {
            assert.equal(number2ListNode.prev.key, number1);
        });
        it('number2ListNode next key is number3', () => {
            assert.equal(number2ListNode.next.key, number3);
        });
        it('number3ListNode key is number3', () => {
            assert.equal(number3ListNode.key, number3);
        });
        it('number3ListNode prev key is number2', () => {
            assert.equal(number3ListNode.prev.key, number2);
        });
        it('number3ListNode next is null', () => {
            assert.equal(number3ListNode.next, null);
        });
    });

    describe('add edges for vertice number2', () => {
        let number1ListNode: any;
        let number2ListNode: any;
        let number3ListNode: any;
        let number4ListNode: any;
        before(() => {
            adjListGraph.addEdge(number2, number1);
            adjListGraph.addEdge(number2, number3);
            adjListGraph.addEdge(number2, number4);
            number1ListNode = adjListGraph.adj[number2].search(number1);
            number2ListNode = adjListGraph.adj[number2].search(number2);
            number3ListNode = adjListGraph.adj[number2].search(number3);
            number4ListNode = adjListGraph.adj[number2].search(number4);
        });
        it('number1ListNode key is number1', () => {
            assert.equal(number1ListNode.key, number1);
        });
        it('number1ListNode prev is number2', () => {
            assert.equal(number1ListNode.prev.key, number2);
        });
        it('number1ListNode next key is number3', () => {
            assert.equal(number1ListNode.next.key, number3);
        });
        it('number2ListNode key is number2', () => {
            assert.equal(number2ListNode.key, number2);
        });
        it('number2ListNode is the head of the list', () => {
            assert.equal(number2ListNode.prev, null);
        });
        it('number2ListNode next key is number1', () => {
            assert.equal(number2ListNode.next.key, number1);
        });
        it('number3ListNode key is number3', () => {
            assert.equal(number3ListNode.key, number3);
        });
        it('number3ListNode prev key is number1', () => {
            assert.equal(number3ListNode.prev.key, number1);
        });
        it('number3ListNode next key is number4', () => {
            assert.equal(number3ListNode.next.key, number4);
        });
        it('number4ListNode key is number4', () => {
            assert.equal(number4ListNode.key, number4);
        });
        it('number4ListNode prev key is number3', () => {
            assert.equal(number4ListNode.prev.key, number3);
        });
        it('number4ListNode is the tail', () => {
            assert.equal(number4ListNode.next, null);
        });
    });

    describe('add edges for vertice number3', () => {
        let number1ListNode: any;
        let number2ListNode: any;
        let number3ListNode: any;
        before(() => {
            adjListGraph.addEdge(number3, number1);
            adjListGraph.addEdge(number3, number2);
            number1ListNode = adjListGraph.adj[number3].search(number1);
            number2ListNode = adjListGraph.adj[number3].search(number2);
            number3ListNode = adjListGraph.adj[number3].search(number3);
        });
        it('number1ListNode key is number1', () => {
            assert.equal(number1ListNode.key, number1);
        });
        it('number1ListNode prev key is number3', () => {
            assert.equal(number1ListNode.prev.key, number3);
        });
        it('number1ListNode next key is number2', () => {
            assert.equal(number1ListNode.next.key, number2);
        });
        it('number2ListNode key is number2', () => {
            assert.equal(number2ListNode.key, number2);
        });
        it('number2ListNode prev key is number1', () => {
            assert.equal(number2ListNode.prev.key, number1);
        });
        it('number2ListNode is the tail of the list', () => {
            assert.equal(number2ListNode.next, null);
        });
        it('number3ListNode key is number3', () => {
            assert.equal(number3ListNode.key, number3);
        });
        it('number3ListNode is the head of the list', () => {
            assert.equal(number3ListNode.prev, null);
        });
        it('number3ListNode next key is number1', () => {
            assert.equal(number3ListNode.next.key, number1);
        });
    });

    describe('add edges for vertice number4', () => {
        let number2ListNode: any;
        let number4ListNode: any;
        before(() => {
            adjListGraph.addEdge(number4, number2);
            number2ListNode = adjListGraph.adj[number4].search(number2);
            number4ListNode = adjListGraph.adj[number4].search(number4);
        });
        it('number2ListNode key is number2', () => {
            assert.equal(number2ListNode.key, number2);
        });
        it('number2ListNode prev key is number4', () => {
            assert.equal(number2ListNode.prev.key, number4);
        });
        it('number2ListNode is the tail', () => {
            assert.equal(number2ListNode.next, null);
        });
        it('number4ListNode key is number4', () => {
            assert.equal(number4ListNode.key, number4);
        });
        it('number4ListNode is the head of the list', () => {
            assert.equal(number4ListNode.prev, null);
        });
        it('number4ListNode next key is number2', () => {
            assert.equal(number4ListNode.next.key, number2);
        });
    });
});