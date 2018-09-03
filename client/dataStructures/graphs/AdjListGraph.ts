import DoublyLinkedList from '../linkedLists/DoublyLinkedList';

class AdjListGraph {
    constructor(V: any[]) {
        this.V = V;
        for(let v of V) {
            let newList = new DoublyLinkedList();
            newList.insert(v);
            this.adj[v.toString()] = newList;
        }
    }

    public adj: any = {};
    public V: any = [];

    addEdge(src: Number, dest: Number) {
        this.adj[src.toString()].insertBack(dest);
    }
}

export default AdjListGraph;