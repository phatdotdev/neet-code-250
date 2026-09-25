class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int ans = 0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < m; c++) {
                if (grid[r][c] == 1) {
                    ans = Math.max(ans, dfs(r, c, grid));
                }
            }
        }
        return ans;
    }

    private int dfs(int r, int c, int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        if (r < 0 || c < 0 || r >= n || c >= m || grid[r][c] == 0) {
            return 0;
        }
        grid[r][c] = 0;
        return 1 + dfs(r - 1, c, grid) + dfs(r + 1, c, grid) + dfs(r, c - 1, grid) + dfs(r, c + 1, grid);
    }
}
