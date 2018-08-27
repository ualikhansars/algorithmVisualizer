import DoublyLinkedList from '../linkedLists/DoublyLinkedList';

class AdjListGraph {
    constructor(V: Number[]) {
        for(let v in V) {
            let newList = new DoublyLinkedList();
            newList.insert(v);
            this.adj.v = newList;
        }
    }

    public adj: any = {};

    addEdge(src: Number, dest: Number) {
        this.adj.src.insert(dest);
    }
}

export default AdjListGraph;