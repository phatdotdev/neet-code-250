class Solution {
    uniquePathsWithObstacles(grid: number[][]): number {
        const n = grid.length;
        const m = grid[0].length;
        const temp: number[] = new Array(m).fill(0);
        temp[0] = 1;
        for (let r = 0; r < n; r++) {
            if (grid[r][0] === 1) {
                temp[0] = 0;
            }
            for (let c = 1; c < m; c++) {
                if (grid[r][c] === 1) {
                    temp[c] = 0;
                } else {
                    temp[c] = temp[c - 1] + temp[c];
                }
            }
        }
        return temp[m - 1];
    }
}
