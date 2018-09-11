import DoublyLinkedList from '../linkedLists/DoublyLinkedList';

class EdgeWeightPair {
    constructor(src: any, dest: any, weight: Number) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
    src: any;
    dest: any;
    weight: Number;
}

class WeightedAdjListGraph {
    constructor(V: any[]) {
        this.V = V;
        for(let v of V) {
            let newList = new DoublyLinkedList();
            newList.insert(v);
            this.adj[v] = newList;
            this.adjArray[v] = [];
        }
    }

    private adjArray: any = {};
    public adj: any = {};
    public V: any = [];

    addEdge(src: any, dest: any, weight: Number) {
        let pair: EdgeWeightPair = new EdgeWeightPair(src, dest, weight);
        this.adj[src].insertBack(pair);
        this.adjArray[src].push(dest);
    }

    getNeighbors(vertex: any): DoublyLinkedList {
        return this.adj[vertex];
    }

    getAdjArray(vertex: any) {
        return this.adjArray[vertex];
    }

    getWeightedEdge(src: any, dest: any): EdgeWeightPair {
        let head = this.adj[src].search(src);
        let x = head;
        while(x != null && x.key.dest !== dest) {
            x = x.next;
        }
        return x;
    }
}

export default WeightedAdjListGraph;