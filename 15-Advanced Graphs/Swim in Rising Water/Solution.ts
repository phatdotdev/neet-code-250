class Solution {
    swimInWater(grid: number[][]): number {
        const n: number = grid.length;

        const graph: number[][] = Array.from({ length: n }, (v, k) =>
            new Array(n).fill(Infinity),
        );
        graph[0][0] = grid[0][0];

        const queue: number[][] = [[0, 0, grid[0][0]]];
        let front = 0;

        const dirs: number[][] = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0],
        ];

        while (front < queue.length) {
            const [r, c, t] = queue[front++];
            if (graph[r][c] < t) {
                continue;
            }
            for (const dir of dirs) {
                const nr = r + dir[0];
                const nc = c + dir[1];
                if (nr >= 0 && nc >= 0 && nr < n && nc < n) {
                    const nt = Math.max(graph[r][c], grid[nr][nc]);
                    if (nt < graph[nr][nc]) {
                        graph[nr][nc] = nt;
                        queue.push([nr, nc, nt]);
                    }
                }
            }
        }
        return graph[n - 1][n - 1];
    }
}
