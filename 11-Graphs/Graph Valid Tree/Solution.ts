class Solution {
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) {
            return false;
        }

        const parent: number[] = Array.from({ length: n }, (_, k) => k);
        const size: number[] = new Array(n).fill(1);

        for (const [u, v] of edges) {
            let rootU = find(u);
            let rootV = find(v);
            if (rootU === rootV) {
                return false;
            }
            if (size[rootU] < size[rootV]) {
                const temp = rootU;
                rootU = rootV;
                rootV = temp;
            }
            parent[rootV] = rootU;
            size[rootU] += size[rootV];
        }

        function find(node: number) {
            if (node !== parent[node]) {
                parent[node] = find(parent[node]);
            }
            return parent[node];
        }

        return true;
    }
}
