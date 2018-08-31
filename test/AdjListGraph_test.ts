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

    // describe('add edges for vertice number1', () => {
    //     let number1ListNode: any;
    //     before(() => {
    //         adjListGraph.addEdge(number1, number2);
    //         adjListGraph.addEdge(number1, number3);
    //         number1ListNode = adjListGraph.adj[number1].search(number1);
    //     });
    //     it('number1ListNode key is number1', () => {
    //         assert.equal(number1ListNode.key, number1);
    //     });
    //     it('number1ListNode is the head of the list', () => {
    //         console.log('number1ListNode', number1ListNode);
    //         assert.equal(number1ListNode.prev, null);
    //     });
    // });
});