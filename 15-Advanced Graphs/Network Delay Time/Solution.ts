class Solution {
    networkDelayTime(times: number[][], n: number, k: number): number {
        const graph: number[][][] = Array.from({ length: n + 1 }, () => []);
        for (const [u, v, c] of times) {
            graph[u].push([v, c]);
        }

        const minCost: number[] = new Array(n + 1).fill(Infinity);
        const visited: boolean[] = new Array(n + 1).fill(false);
        minCost[k] = 0;
        for (let step = 0; step < n; step++) {
            let u = -1;
            let time = Infinity;
            for (let j = 1; j <= n; j++) {
                if (!visited[j] && time > minCost[j]) {
                    u = j;
                    time = minCost[j];
                }
            }
            if (u === -1) {
                break;
            }
            visited[u] = true;
            for (const [v, c] of graph[u]) {
                if (!visited[v] && minCost[u] + c < minCost[v]) {
                    minCost[v] = minCost[u] + c;
                }
            }
        }

        let maxDelay = 0;
        for (let i = 1; i <= n; i++) {
            if (minCost[i] === Infinity) return -1;
            maxDelay = Math.max(maxDelay, minCost[i]);
        }
        return maxDelay;
    }
}
