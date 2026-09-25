class Solution {
    findRedundantConnection(edges: number[][]): number[] {
        const n: number = edges.length;
        const parent: number[] = Array.from({ length: n + 1 }, (_, idx) => idx);
        for (const [u, v] of edges) {
            const rootU = find(u);
            const rootV = find(v);
            if (rootU === rootV) {
                return [u, v];
            }
            parent[rootV] = rootU;
        }
        function find(node: number) {
            if (parent[node] === node) {
                return node;
            }
            return find(parent[node]);
        }
        return [];
    }
}
