class Solution {
    maxAreaOfIsland(grid: number[][]): number {
        const n: number = grid.length;
        const m: number = grid[0].length;
        let maxArea: number = 0;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }
        function dfs(r: number, c: number): number {
            if (r < 0 || c < 0 || r >= n || c >= m) {
                return 0;
            }
            if (grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            let area = 1;
            area += dfs(r - 1, c);
            area += dfs(r, c - 1);
            area += dfs(r + 1, c);
            area += dfs(r, c + 1);
            return area;
        }
        return maxArea;
    }
}
