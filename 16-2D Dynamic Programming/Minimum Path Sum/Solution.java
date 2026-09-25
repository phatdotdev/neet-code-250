import java.util.Arrays;

class Solution {
    public int minPathSum(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int[][] temp = new int[n][m];
        for (int i = 0; i < n; i++) {
            Arrays.fill(temp[i], Integer.MAX_VALUE);
        }
        temp[0][0] = grid[0][0];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (i + 1 < n) {
                    temp[i + 1][j] = Math.min(temp[i + 1][j], temp[i][j] + grid[i + 1][j]);
                }
                if (j + 1 < m) {
                    temp[i][j + 1] = Math.min(temp[i][j + 1], temp[i][j] + grid[i][j + 1]);
                }
            }
        }
        return temp[n - 1][m - 1];
    }
}