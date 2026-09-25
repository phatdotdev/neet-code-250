class Solution {
    public int numDecodings(String s) {
        if (s.length() == 0)
            return 0;
        int n = s.length();
        int[] dp = new int[n];
        int a = 0;
        for (int i = 0; i < n; i++) {
            int b = s.charAt(i) - '0';
            if (b >= 1 && b <= 9) {
                if (i > 0) {
                    dp[i] += dp[i - 1];
                } else {
                    dp[i] += 1;
                }
            }
            int c = a * 10 + b;
            if (c >= 10 && c <= 26) {
                if (i > 1) {
                    dp[i] += dp[i - 2];
                } else {
                    dp[i] += 1;
                }
            }
            if (dp[i] == 0) {
                return 0;
            }
            a = b;
        }
        return dp[n - 1];
    }
}