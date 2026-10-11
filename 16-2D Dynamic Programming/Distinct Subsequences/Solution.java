class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length();
        int n = t.length();

        int[] dp = new int[n + 1];
        dp[0] = 1;

        for (int j = 1; j <= m; j++) {
            char charS = s.charAt(j - 1);
            for (int i = n; i >= 1; i--) {
                if (t.charAt(i - 1) == charS) {
                    dp[i] += dp[i - 1];
                }
            }
        }

        return dp[n];
    }
}
