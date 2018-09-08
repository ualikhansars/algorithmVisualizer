import {assert} from 'chai';
import {DFS} from '../../client/searching/DFS';
import AdjListGraph from '../../client/dataStructures/graphs/AdjListGraph';
import Queue from '../../client/dataStructures/queues/Queue';

describe('DFS test', () => {
    let graph: AdjListGraph;
    let A: string, B: string, C: string, D: string, E: string;
    before(() => {
        A = 'A';
        B = 'B';
        C = 'C';
        D = 'D';
        E = 'E';
        let vertices = [A, B, C, D, E];
        graph = new AdjListGraph(vertices);
        graph.addEdge(B, D);
        graph.addEdge(B, E);
        graph.addEdge(D, C);
        graph.addEdge(C, A);
    });

    describe('execute DFS from vertex A', () => {
        let queue: Queue;
        before(() => {
            queue = DFS(graph, A);
        });
        it('first visited element is A', () => {
            let element = queue.dequeue();
            assert.equal(element, 'A');
        });
        it('second visited element is B', () => {
            let element = queue.dequeue();
            assert.equal(element, 'B');
        });
        it('third visited element is D', () => {
            let element = queue.dequeue();
            assert.equal(element, 'D');
        });
        it('fourth visited element is E', () => {
            let element = queue.dequeue();
            assert.equal(element, 'E');
        });
        it('fifth visited element is C', () => {
            let element = queue.dequeue();
            assert.equal(element, 'C');
        });
        it('sixth visited element is D', () => {
            let element = queue.dequeue();
            assert.equal(element, 'D');
        });
        it('seventh visited element is E', () => {
            let element = queue.dequeue();
            assert.equal(element, 'E');
        });
        it('no element left in the queue', () => {
            assert.equal(queue.isEmpty(), true);
        });
    }); 
});