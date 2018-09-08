import DoublyLinkedList from '../linkedLists/DoublyLinkedList';

class AdjListGraph {
    constructor(V: any[]) {
        this.V = V;
        for(let v of V) {
            let newList = new DoublyLinkedList();
            newList.insert(v);
            this.adj[v] = newList;
        }
    }

    public adj: any = {};
    public V: any = [];

    addEdge(src: any, dest: any) {
        this.adj[src].insertBack(dest);
    }

    getNeighbors(vertex: any): DoublyLinkedList {
        return this.adj[vertex];
    }
}

export default AdjListGraph;