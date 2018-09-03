import AdjListGraph from '../dataStructures/graphs/AdjListGraph';
import Queue from '../dataStructures/queues/Queue';

const BFS = (G: AdjListGraph, s: any) => {
    let level: any = { s: 0 };
    let parent: any = { s: null };
    let i = 1;
    let queue = new Queue();
    queue.enqueue(s);
    while(!queue.isEmpty()) {
        let next = new Queue();
        let u = queue.dequeue();
        for(let v in G.adj[u]) {
            if(level.hasOwnProperty(v)) {
                level.v = i;
                parent.v = u;
                queue.enqueue(v);
            }
        }
    }
    i = i + 1;
}