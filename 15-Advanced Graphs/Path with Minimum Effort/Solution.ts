class Solution {
    minimumEffortPath(heights: number[][]): number {
        const n = heights.length;
        const m = heights[0].length;

        const efforts: number[][] = Array.from({ length: n }, () =>
            new Array(m).fill(Infinity),
        );
        efforts[0][0] = 0;

        const queue: number[][] = [];
        queue.push([0, 0, 0]);

        const dirs: number[][] = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0],
        ];

        let i = 0;
        while (i < queue.length) {
            const [e, r, c] = queue[i++];
            if (e > efforts[r][c]) {
                continue;
            }
            for (const dir of dirs) {
                const nr = r + dir[0];
                const nc = c + dir[1];
                if (nr >= 0 && nc >= 0 && nr < n && nc < m) {
                    const newEffort = Math.max(
                        e,
                        Math.abs(heights[nr][nc] - heights[r][c]),
                    );
                    if (newEffort < efforts[nr][nc]) {
                        efforts[nr][nc] = newEffort;
                        queue.push([newEffort, nr, nc]);
                    }
                }
            }
        }
        return efforts[n - 1][m - 1];
    }
}
