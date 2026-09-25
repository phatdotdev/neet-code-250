class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int n = obstacleGrid.length, m = obstacleGrid[0].length;
        int[] temp = new int[m];
        temp[0] = 1;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < m; c++) {
                if (obstacleGrid[r][c] == 1) {
                    temp[c] = 0;
                } else {
                    int ways = temp[c];
                    if (c > 0) {
                        ways += temp[c - 1];
                    }
                    temp[c] = ways;
                }
            }
        }
        return temp[m - 1];
    }
}
