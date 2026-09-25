class Solution {
    numIslands(grid: string[][]): number {
        const n = grid.length;
        const m = grid[0].length;
        let count = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === "1") {
                    count++;
                    grid[r][c] = "0";
                    bfs(r, c);
                }
            }
        }

        function bfs(sr: number, sc: number) {
            const queue: number[][] = [[sr, sc]];
            let index = 0;
            while (index < queue.length) {
                const [r, c] = queue[index];
                if (r - 1 >= 0 && grid[r - 1][c] === "1") {
                    grid[r - 1][c] = "0";
                    queue.push([r - 1, c]);
                }
                if (r + 1 < n && grid[r + 1][c] === "1") {
                    grid[r + 1][c] = "0";
                    queue.push([r + 1, c]);
                }
                if (c - 1 >= 0 && grid[r][c - 1] === "1") {
                    grid[r][c - 1] = "0";
                    queue.push([r, c - 1]);
                }
                if (c + 1 < m && grid[r][c + 1] === "1") {
                    grid[r][c + 1] = "0";
                    queue.push([r, c + 1]);
                }
                index++;
            }
        }

        return count;
    }
}
