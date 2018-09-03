import AdjListGraph from '../dataStructures/graphs/AdjListGraph';
import Queue from '../dataStructures/queues/Queue';

export const BFS = (G: AdjListGraph, s: any) => {
    let level: any = {};
    let parent: any = {};
    level[s.toString()] = 0;
    parent[s.toString()] = null;
    let i = 1;
    let queue = new Queue();
    queue.enqueue(s); 
    while(!queue.isEmpty()) {
        let u = queue.dequeue();        
        let node = G.adj[u].search(u);
        while(node.next != null) {
            let neighbor = node.next.key;
            if(!level.hasOwnProperty(neighbor)) {
                level[neighbor.toString()] = i;
                parent[neighbor.toString()] = u;
                queue.enqueue(neighbor);
            }
            node = node.next;
        }
        i = i + 1;
    }
}
