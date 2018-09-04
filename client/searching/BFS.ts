import AdjListGraph from '../dataStructures/graphs/AdjListGraph';
import Queue from '../dataStructures/queues/Queue';

export const BFS = (G: AdjListGraph, s: any) => {
    let level: any = {};
    let parent: any = {};
    level[s] = 0;
    parent[s] = null;
    let i = 1;
    let queue = new Queue();
    queue.enqueue(s); 
    while(!queue.isEmpty()) {
        let u = queue.dequeue();        
        let node = G.adj[u].search(u);
        while(node.next != null) {
            let neighbor = node.next.key;
            if(!level.hasOwnProperty(neighbor)) {
                level[neighbor] = i;
                parent[neighbor] = u;
                queue.enqueue(neighbor);
            }
            node = node.next;
        }
        i = i + 1;
    }

    return parent;
}
