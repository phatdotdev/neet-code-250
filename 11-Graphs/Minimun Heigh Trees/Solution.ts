class Solution {
    findMinHeightTrees(n: number, edges: number[][]): number[] {
        if (n < 2) {
            return [0];
        }

        const degree: number[] = Array(n).fill(0);
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
            degree[u]++;
            degree[v]++;
        }

        let front = 0;
        const queue: number[] = [];

        for (let i = 0; i < n; i++) {
            if (degree[i] === 1) {
                queue.push(i);
            }
        }

        let remaining = n;
        while (remaining > 2) {
            let size = queue.length - front;
            remaining -= size;
            while (size-- > 0) {
                const node = queue[front++];
                for (const next of graph[node]) {
                    degree[next]--;
                    if (degree[next] === 1) {
                        queue.push(next);
                    }
                }
            }
        }

        return queue.slice(front, queue.length);
    }
}
