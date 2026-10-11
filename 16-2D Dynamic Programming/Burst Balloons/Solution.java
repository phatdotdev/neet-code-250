
class Solution {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] val = new int[n + 2];
        val[0] = 1;
        val[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            val[i + 1] = nums[i];
        }
        int[][] dp = new int[n + 2][n + 2];
        for (int len = 1; len <= n; len++) {
            for (int i = 1; i <= n - len + 1; i++) {
                int j = i + len - 1;
                for (int k = i; k <= j; k++) {
                    int gain = val[i - 1] * val[k] * val[j + 1];
                    int remaining = dp[i][k - 1] + dp[k + 1][j];
                    dp[i][j] = Math.max(dp[i][j], gain + remaining);
                }
            }
        }
        return dp[1][n];
    }
}
