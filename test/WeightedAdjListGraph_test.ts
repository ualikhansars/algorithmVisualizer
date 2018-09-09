import {assert} from 'chai';
import WeightedAdjListGraph from '../client/dataStructures/graphs/WeightedAdjListGraph';
import DoublyLinkedList from '../client/dataStructures/linkedLists/DoublyLinkedList';

describe('AdjListGraph test', () => {
    let weightedAdjListGraph: WeightedAdjListGraph;
    let A: string, B: string, C: string, D: string;
    before(() => {
        A = 'A';
        B = 'B';
        C = 'C';
        D = 'D';
        weightedAdjListGraph = new WeightedAdjListGraph([A, B, C, D]);
    });

    describe('add edges for vertex A', () => {
        let AB: any, AD: any;
        before(() => {
            weightedAdjListGraph.addEdge(A, B, 3);
            weightedAdjListGraph.addEdge(A, D, 4);
            AB = weightedAdjListGraph.getWeightedEdge(A, B);
            AD = weightedAdjListGraph.getWeightedEdge(A, D);
        }); 
        it('egde AB source is A', () => {
            assert.equal(AB.key.src, A);
        });
        it('egde AB dest is B', () => {
            assert.equal(AB.key.dest, B);
        });
        it('egde AB weight is 3', () => {
            assert.equal(AB.key.weight, 3);
        });
        it('egde AD source is A', () => {
            assert.equal(AD.key.src, A);
        });
        it('egde AD dest is D', () => {
            assert.equal(AD.key.dest, D);
        });
        it('egde AD weight is 4', () => {
            assert.equal(AD.key.weight, 4);
        });
    });

    describe('add edges for vertex B', () => {
        let BC: any;
        before(() => {
            weightedAdjListGraph.addEdge(B, C, 4);
            BC = weightedAdjListGraph.getWeightedEdge(B, C);
        });  
        it('egde BC source is B', () => {
            assert.equal(BC.key.src, B);
        });
        it('egde BC dest is C', () => {
            assert.equal(BC.key.dest, C);
        });
        it('egde BC weight is 4', () => {
            assert.equal(BC.key.weight, 4);
        });
    });

    describe('add edges for vertex C', () => {
        let vertexC: any;
        before(() => {
            vertexC = weightedAdjListGraph.adj[C].search(C);
        });
        it('C does not have any edges', () => {
            assert.equal(vertexC.next, null);
        });
    });

    describe('add edges for D', () => {
        let DB: any;
        before(() => {
            weightedAdjListGraph.addEdge(D, B, 8);
            DB = weightedAdjListGraph.getWeightedEdge(D, B);
        });
        it('edge DB source is D', () => {
            assert.equal(DB.key.src, D);
        });
        it('edge DB dest is B', () => {
            assert.equal(DB.key.dest, B);
        });
        it('edge DB weight is 8', () => {
            assert.equal(DB.key.weight, 8);
        });
    });
});

