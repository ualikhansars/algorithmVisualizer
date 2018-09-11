import WeightedAdjListGraph from "../dataStructures/graphs/WeightedAdjListGraph";

export const Dijkstra = (G: WeightedAdjListGraph, s: any) => {
    let distance: any = {};
    let parent: any = {};
    for(let v of G.V) {
        distance[v] = Number.POSITIVE_INFINITY;
        parent[v] = null;
    }
    distance[s] = 0;
    let S = [];
    let Q = G.V;
    while(Q.length != 0) {
        let u = extractMin(Q);
        S.push(u);
        for(let v of G.getAdjArray(u)) {
            relax(u, v);
        }
        
    }
}

const extractMin = (Q: any[]) => {
   
};  

const relax = (u: any, v: any) => {

}