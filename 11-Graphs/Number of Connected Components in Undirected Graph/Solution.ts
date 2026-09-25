class Solution {
    countComponents(n: number, edges: number[][]): number {
        const parent: number[] = Array.from({ length: n }, (_, node) => node);
        let count = n;
        for (const [u, v] of edges) {
            const rootU = find(u);
            const rootV = find(v);
            if (rootU !== rootV) {
                parent[rootV] = rootU;
                count--;
            }
        }
        function find(node: number) {
            if (node != parent[node]) {
                parent[node] = find(parent[node]);
            }
            return parent[node];
        }
        return count;
    }
}
