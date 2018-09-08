import DoublyLinkedList from "../dataStructures/linkedLists/DoublyLinkedList";
import AdjListGraph from '../dataStructures/graphs/AdjListGraph';
import Queue from "../dataStructures/queues/Queue";

let parent: any = {};
let queue: Queue = new Queue();

export const DFS = (G: AdjListGraph, adj: any) => {
    let parent: any = {};
    for(let s of G.V) {
        if(!parent.hasOwnProperty(s)) {
            parent[s] = null;
            let adj = G.getNeighbors(s);
            DFS_Visit(adj, s);
        }
    }

    return queue;
}

const DFS_Visit = (adj: DoublyLinkedList, s: any) => {
    let node = adj.search(s);
    queue.enqueue(s);
    parent[s] = null;
    while(node.next != null) {
        let neighbor = node.next;
        if(!parent.hasOwnProperty(neighbor.key)) {
            parent[neighbor.key] = s;
            DFS_Visit(adj, neighbor.key);
        }
        node = adj.search(neighbor.key);
    }
} 