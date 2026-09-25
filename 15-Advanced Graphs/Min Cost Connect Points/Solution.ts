/* PRIM */
class Solution {
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;
        let minCost = 0;

        const minDist: number[] = new Array(n).fill(Infinity);
        const visited: boolean[] = new Array(n).fill(false);

        minDist[0] = 0;
        for (let step = 0; step < n; step++) {
            let u = -1;
            for (let i = 0; i < n; i++) {
                if (!visited[i] && (u == -1 || minDist[i] < minDist[u])) {
                    u = i;
                }
            }
            visited[u] = true;
            minCost += minDist[u];

            for (let v = 0; v < n; v++) {
                if (!visited[v]) {
                    const dist =
                        Math.abs(points[u][0] - points[v][0]) +
                        Math.abs(points[u][1] - points[v][1]);
                    if (dist < minDist[v]) {
                        minDist[v] = dist;
                    }
                }
            }
        }

        return minCost;
    }
}
