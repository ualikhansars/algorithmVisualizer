import DoublyLinkedList from '../linkedLists/DoublyLinkedList';

class AdjListGraph {
    constructor(V: Number[]) {
        console.log('V', V);
        for(let v of V) {
            console.log('v', v);
            let newList = new DoublyLinkedList();
            newList.insert(v);
            this.adj[v.toString()] = newList;
        }
    }

    public adj: any = {};

    addEdge(src: Number, dest: Number) {
        this.adj[src.toString()].insert(dest);
    }
}

export default AdjListGraph;