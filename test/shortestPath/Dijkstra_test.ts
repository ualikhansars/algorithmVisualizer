import {assert} from 'chai';
import {Dijkstra} from '../../client/searching/Dijkstra';
import WeightedAdjListGraph from '../../client/dataStructures/graphs/WeightedAdjListGraph';
import Stack from '../../client/dataStructures/stack/Stack';

describe('Dijkstra undirected graph test', () => {
    let graph: WeightedAdjListGraph;
    let A: string, B: string, C: string, D: string;
    before(() => {
        A = 'A';
        B = 'B';
        C = 'C';
        D = 'D';
        let vertices = [A, B, C, D];
        graph = new WeightedAdjListGraph(vertices);
        graph.addEdge(A, B, 10);
        graph.addEdge(A, C, 4);
        graph.addEdge(B, A, 10)
        graph.addEdge(B, C, 5);
        graph.addEdge(B, D, 3);
        graph.addEdge(C, A, 4);
        graph.addEdge(C, B, 5);
        graph.addEdge(C, D, 10);
        graph.addEdge(D, B, 3);
        graph.addEdge(D, C, 10);
    });

    describe('exetuce Dijkstra from vertex A', () => {
        let parent: any;
        before(() => {
            parent = Dijkstra(graph, A);
        });
        describe('find shortest path from A to D', () => {
            let stack: Stack;
            before(() => {
                stack = new Stack();
                let vertex = D;
                while(vertex != null) {
                    stack.push(vertex);
                    vertex = parent[vertex];
                }
            });
            it('First vertex is A', (done) => {
                assert.equal(A, stack.pop());
                done();
            });
            it('Second vertex is C', (done) => {
                assert.equal(C, stack.pop());
                done();
            });
            it('third vertext is B', (done) => {
                assert.equal(B, stack.pop());
                done();
            });
            it('last vertext is D', (done) => {
                assert.equal(D, stack.pop());
                done();
            });
            it('no vertex left in the stack', (done) => {
                assert.equal(stack.stackEmpty(), true);
                done();
            });
        });
    });
});