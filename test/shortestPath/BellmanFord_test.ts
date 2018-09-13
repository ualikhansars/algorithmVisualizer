import {assert} from 'chai';
import {BellmanFord} from '../../client/searching/BellmanFord';
import WeightedAdjListGraph from '../../client/dataStructures/graphs/WeightedAdjListGraph';
import Stack from '../../client/dataStructures/stack/Stack';

describe('Bellman Ford non-negative cycles test', () => {
    let graph: WeightedAdjListGraph;
    let A: string, B: string, C: string, D: string;
    before(() => {
        A = 'A';
        B = 'B';
        C = 'C';
        D = 'D';
        let vertices = [A, B, C, D];
        graph = new WeightedAdjListGraph(vertices);
        graph.addEdge(A, B, 5);
        graph.addEdge(B, C, 3);
        graph.addEdge(B, D, 4);
        graph.addEdge(C, A, 6);
        graph.addEdge(C, D, -2);
    });

    describe('execute Bellman Ford from vertex A', () => {
        let parent: any;
        let path: Stack;
        before(() => {
            parent = BellmanFord(graph, A);
            path = new Stack();
            let vertex = D;
            while(vertex != null) {
                path.push(vertex);
                vertex = parent[vertex];
            }
        });
        it('First vertex is A', (done) => {
            assert.equal(A, path.pop());
            done();
        });
        it('Second vertex is B', (done) => {
            assert.equal(B, path.pop());
            done();
        });
        it('Third vertex is C', (done) => {
            assert.equal(C, path.pop());
            done();
        });
        it('Last vertex is D', (done) => {
            assert.equal(D, path.pop());
            done();
        });
        it('No vertex left in the path', (done) => {
            assert.equal(path.stackEmpty(), true);
            done();
        });
    });
});

describe('Bellman Ford negative cycles test', () => {
    let graph: WeightedAdjListGraph;
    let A: string, B: string, C: string, D: string, E: string;
    before(() => {
        A = 'A';
        B = 'B';
        C = 'C';
        D = 'D';
        E = 'E';
        let vertices = [A, B, C, D];
        graph = new WeightedAdjListGraph(vertices);
        graph.addEdge(A, B, 2);
        graph.addEdge(B, C, 3);
        graph.addEdge(C, D, 1);
        graph.addEdge(D, B, -10);
        graph.addEdge(D, E, 4);
    });
    describe('execute Bellman Ford from vertex A', () => {
        let parent: any;
        before(() => {
            parent = BellmanFord(graph, A);
        });
        it('Bellman Ford detected negative cycles', () => {
            assert.equal(parent, null);
        });
    });
});