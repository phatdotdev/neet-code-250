import java.util.Arrays;

class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        int[][] dp = new int[n][m];

        for (int i = 0; i < n; i++) {
            Arrays.fill(dp[i], -1);
        }
        int[][] dirs = {
                { -1, 0 },
                { 0, -1 },
                { 0, 1 },
                { 1, 0 }
        };

        int result = 0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < m; c++) {
                result = Math.max(result, dfs(r, c, dp, matrix, dirs));
            }
        }
        return result;
    }

    private int dfs(int r, int c, int[][] dp, int[][] matrix, int[][] dirs) {
        if (dp[r][c] != -1) {
            return dp[r][c];
        }
        int n = dp.length;
        int m = dp[0].length;
        dp[r][c] = 1;
        for (int[] dir : dirs) {
            int nr = r + dir[0];
            int nc = c + dir[1];
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && matrix[r][c] > matrix[nr][nc]) {
                dp[r][c] = Math.max(dp[r][c], dfs(nr, nc, dp, matrix, dirs) + 1);
            }
        }
        return dp[r][c];
    }
}
