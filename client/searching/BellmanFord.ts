import WeightedAdjListGraph from "../dataStructures/graphs/WeightedAdjListGraph";

export const BellmanFord = (G: WeightedAdjListGraph, s: any) => {
    let negativeCycles = false;
    let parent: any = {};
    let distance: any = {};
    for(let v of G.V) {
        parent[v] = null;
        distance[v] = Number.POSITIVE_INFINITY;
    }
    distance[s] = 0;

    for(let u of G.V) {
        for(let v of G.getAdjArray(u)) {
            let edge = G.getWeightedEdge(u, v).key;
            if(distance[v] > distance[u] + edge.weight) {
                let newWeight = distance[u] + edge.weight;
                distance[v] = newWeight
                parent[v] = u;
            }
        }
    }

    for(let u of G.V) {
        for(let v of G.getAdjArray(u)) {
            let edge = G.getWeightedEdge(u, v).key;
            if(distance[v] > distance[u] + edge.weight) {
               negativeCycles = true;
            }
        }    
    } 

    if(!negativeCycles) {
        return parent;
    } 
    return null;
};