class Solution {
    buildMatrix(
        k: number,
        rowConditions: number[][],
        colConditions: number[][],
    ) {
        const rowOrder: number[] = this.topoSort(k, rowConditions);
        const colOrder: number[] = this.topoSort(k, colConditions);
        if (rowOrder.length === 0 || colOrder.length === 0) {
            return [];
        }
        const posCol: number[] = new Array(k).fill(0);
        for (let j = 0; j < k; j++) {
            posCol[colOrder[j]] = j;
        }
        const res: number[][] = Array.from({ length: k }, () =>
            new Array(k).fill(0),
        );
        for (let i = 0; i < k; i++) {
            const val = rowOrder[i];
            const j = posCol[val];
            res[i][j] = val + 1;
        }
        return res;
    }

    private topoSort(k: number, conditions: number[][]): number[] {
        const graph: number[][] = Array.from({ length: k }, () => []);
        const indegree: number[] = new Array(k).fill(0);
        for (const [u, v] of conditions) {
            graph[u - 1].push(v - 1);
            indegree[v - 1]++;
        }
        const queue: number[] = [];
        for (let u = 0; u < k; u++) {
            if (indegree[u] === 0) {
                queue.push(u);
            }
        }
        let i = 0;
        while (i < queue.length) {
            const u = queue[i];
            for (const v of graph[u]) {
                indegree[v]--;
                if (indegree[v] === 0) {
                    queue.push(v);
                }
            }
            i++;
        }
        return queue.length === k ? queue : [];
    }
}
