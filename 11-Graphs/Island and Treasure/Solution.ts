class Solution {
    islandsAndTreasure(grid: number[][]): void {
        if (grid === null || grid.length === 0) {
            return;
        }
        const n: number = grid.length;
        const m: number = grid[0].length;
        const queue: number[][] = [];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }
        const dirs: number[][] = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let index = 0;
        while (index < queue.length) {
            const size = queue.length;
            while (index < size) {
                const [r, c] = queue[index];
                for (const d of dirs) {
                    const nr = r + d[0];
                    const nc = c + d[1];
                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < n &&
                        nc < m &&
                        grid[r][c] + 1 < grid[nr][nc]
                    ) {
                        grid[nr][nc] = grid[r][c] + 1;
                        queue.push([nr, nc]);
                    }
                }
                index++;
            }
        }
    }
}
