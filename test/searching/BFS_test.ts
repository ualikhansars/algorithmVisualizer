import {assert} from 'chai';
import AdjListGraph from '../../client/dataStructures/graphs/AdjListGraph';
import {BFS} from '../../client/searching/BFS';
import Random from '../helpers/Random';

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

    it('BFS from node 1', () => {
        let node1 = number1;
        BFS(graph, number1);
    });
});