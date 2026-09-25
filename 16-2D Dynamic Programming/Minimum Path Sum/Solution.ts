class Solution {
    minPathSum(grid: number[][]): number {
        const n = grid.length,
            m = grid[0].length;
        const temp: number[] = new Array(m).fill(Infinity);
        temp[0] = 0;
        for (let i = 0; i < n; i++) {
            temp[0] += grid[i][0];
            for (let j = 1; j < m; j++) {
                const prev = Math.min(temp[j - 1], temp[j]);
                temp[j] = prev + grid[i][j];
            }
        }
        return temp[m - 1];
    }
}
