import WeightedAdjListGraph from "../dataStructures/graphs/WeightedAdjListGraph";
import PriorityQueue from "../dataStructures/queues/PriorityQueue";

export const Dijkstra = (G: WeightedAdjListGraph, s: any) => {
    let parent: any = {};
    let distance: any = {};
    let Q: PriorityQueue = new PriorityQueue();
    for(let v of G.V) {
        parent[v] = null;
        Q.insert(v, Number.POSITIVE_INFINITY);
        distance[v] = Number.POSITIVE_INFINITY;
    }
    Q.update(s, 0);
    distance[s] = 0;
    let S = [];
    while(!Q.isEmpty()) {
        let u = Q.extractMin();
        S.push(u);
        for(let v of G.getAdjArray(u.key)) {
            // relax edge
            let edge = G.getWeightedEdge(u.key, v).key;
            if(distance[v] > distance[u.key] + edge.weight) {
                let newWeight = distance[u.key] + edge.weight;
                distance[v] = newWeight
                parent[v] = u.key;
                Q.update(v, newWeight); 
            }
        }
    }

    return parent;
}