import {assert} from 'chai';
import AdjListGraph from '../../client/dataStructures/graphs/AdjListGraph';
import Stack from '../../client/dataStructures/stack/Stack';
import {BFS} from '../../client/searching/BFS';

describe('Breadth First Search test', () => {
    let graph: AdjListGraph;
    let number1: number, number2: number, number3: number, number4: number;
    before(() => {
        number1 = 1;
        number2 = 2;
        number3 = 3;
        number4 = 4;
        graph = new AdjListGraph([number1,number2,number3,number4]);
        graph.addEdge(number1, number2);
        graph.addEdge(number1, number3);
        graph.addEdge(number2, number1);
        graph.addEdge(number2, number4);
        graph.addEdge(number3, number1);
        graph.addEdge(number4, number2);
    });

    describe('BFS from node 1', () => {
        let parent: any;
        before(() => {
            parent = BFS(graph, number1);
        });
        it('parent of number1 is null', () => {
            assert.equal(parent[number1], null);
        });
        it('parent of number2 is number1', () => {
            assert.equal(parent[number2], number1);
        });
        it('parent of number3 is number1', () => {
            assert.equal(parent[number3], number1);
        });
        it('parent of number4 is number2', () => {
            assert.equal(parent[number4], number2);
        });
        describe('construct path from number1 to number4', () => {
            let path: Stack;
            before(() => {
                path = new Stack();
                let v = number4;
                path.push(v);
                while(parent[v] != null) {
                    path.push(parent[v]);
                    v = parent[v];
                }
            });
            it('first node in the path is number1', (done) => {
                let node = path.pop();
                assert.equal(node, number1);
                done();
            });
            it('second node in the path is number2', (done) => {
                let node = path.pop();
                assert.equal(node, number2);
                done();
            });
            it('last node in the path is number4', (done) => {
                let node = path.pop();
                assert.equal(node, number4);
                done();
            });
            it('path does not contain any nodes', (done) => {                
                assert.equal(path.stackEmpty(), true);
                done();
            });
        });
    });
});