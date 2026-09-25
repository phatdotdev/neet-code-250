class Solution {
    orangesRotting(grid: number[][]): number {
        const n = grid.length;
        const m = grid[0].length;
        const queue: number[][] = [];
        let freshCount = 0;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    freshCount++;
                }
            }
        }
        if (freshCount === 0) {
            return 0;
        }
        let minutes = 0;
        let i = 0;
        const dirs: number[][] = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0],
        ];
        while (i < queue.length && freshCount > 0) {
            const size = queue.length;
            while (i < size) {
                const [r, c] = queue[i];
                for (const dir of dirs) {
                    const nr = r + dir[0];
                    const nc = c + dir[1];
                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < n &&
                        nc < m &&
                        grid[nr][nc] === 1
                    ) {
                        freshCount--;
                        queue.push([nr, nc]);
                        grid[nr][nc] = 2;
                    }
                }
                i++;
            }
            minutes++;
        }
        return freshCount === 0 ? minutes : -1;
    }
}
