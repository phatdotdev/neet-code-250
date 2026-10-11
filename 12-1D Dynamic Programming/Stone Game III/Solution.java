class Solution {
    public String stoneGameIII(int[] stoneValue) {
        int n = stoneValue.length;

        int[] dp = new int[n + 1];

        for (int i = n - 1; i >= 0; i--) {
            dp[i] = Integer.MIN_VALUE;
            int currentValue = 0;
            for (int j = i; j < n && j < i + 3; j++) {
                currentValue += stoneValue[j];
                dp[i] = Math.max(dp[i], currentValue - dp[j + 1]);
            }
        }
        if (dp[0] > 0) {
            return "Alice";
        }
        if (dp[0] < 0) {
            return "Bob";
        }
        return "Tie";
    }

}