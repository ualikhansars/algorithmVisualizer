import DoublyLinkedList from "../dataStructures/linkedLists/DoublyLinkedList";
import AdjListGraph from '../dataStructures/graphs/AdjListGraph';

export const DFS = (G: AdjListGraph, adj: any) => {
    let parent: any = {};
    for(let s in G.V) {
        if(!parent.hasOwnProperty(s)) {
            parent[s] = null;
            let adj = G.getNeighbors(s);
            DFS_Visit(adj, s);
        }
    }
}

const DFS_Visit = (adj: DoublyLinkedList, s: any) => {
    let node = adj.search(s);
    let parent: any = {};
    parent[s] = null; 
    while(s.next != null) {
        let neighbor = s.next.key;
        if(!parent.hasOwnProperty(neighbor)) {
            parent[neighbor] = s;
            DFS_Visit(adj, neighbor);
        }
    }
} 