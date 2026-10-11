class DSU {
    private parent: number[];
    private rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, k) => k);
        this.rank = Array.from({ length: n }, () => 0);
    }

    find(x: number) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return false;
        }
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }
}

class Solution {
    findCriticalAndPseudoCriticalEdges(
        n: number,
        edges: number[][],
    ): number[][] {
        const critical: number[] = [];
        const pseudoCritical: number[] = [];

        const sortedEdges: number[][] = edges
            .map((edge, index) => [edge[0], edge[1], edge[2], index])
            .sort((a, b) => a[2] - b[2]);

        const mstWeight = this.kruskal(n, sortedEdges, -1, -1);
        for (const [u, v, w, i] of sortedEdges) {
            const withoutEdge = this.kruskal(n, sortedEdges, i, -1);
            if (withoutEdge > mstWeight) {
                critical.push(i);
                continue;
            }
            const withEdge = this.kruskal(n, sortedEdges, -1, i);
            if (withEdge === mstWeight) {
                pseudoCritical.push(i);
            }
        }
        return [critical, pseudoCritical];
    }

    private kruskal(
        n: number,
        edges: number[][],
        excludeIndex: number,
        includeIndex: number,
    ): number {
        let totalWeight = 0;
        let edgeCount = 0;

        const dsu: DSU = new DSU(n);
        const m = edges.length;
        for (let i = 0; i < m; i++) {
            if (edges[i][3] === includeIndex) {
                const u = edges[i][0];
                const v = edges[i][1];
                const w = edges[i][2];
                totalWeight += w;
                edgeCount++;
                dsu.union(u, v);
                break;
            }
        }
        for (let i = 0; i < m; i++) {
            if (edges[i][3] === includeIndex || edges[i][3] == excludeIndex) {
                continue;
            }
            const u = edges[i][0];
            const v = edges[i][1];
            const w = edges[i][2];
            if (dsu.union(u, v)) {
                totalWeight += w;
                edgeCount++;

                if (edgeCount === n - 1) {
                    return totalWeight;
                }
            }
        }

        if (edgeCount !== n - 1) {
            return Infinity;
        }

        return totalWeight;
    }
}
