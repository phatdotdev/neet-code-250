import java.util.Arrays;

class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.sort(coins);
        Arrays.fill(dp, -1);
        dp[0] = 0;
        for (int i = 0; i <= amount; i++) {
            if (dp[i] == -1) {
                continue;
            }
            for (int coin : coins) {
                if (coin > amount || i + coin > amount) {
                    break;
                }
                if (dp[i + coin] == -1) {
                    dp[i + coin] = dp[i] + 1;
                } else {
                    dp[i + coin] = Math.min(dp[i + coin], dp[i] + 1);
                }
            }
        }
        return dp[amount];
    }
}
