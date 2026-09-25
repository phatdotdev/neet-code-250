import java.util.List;

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (int i = 0; i < n; i++) {
            if (dp[i]) {
                for (String word : wordDict) {
                    int len = word.length();
                    if (n >= i + len && s.substring(i, i + len).equals(word)) {
                        dp[i + len] = true;
                    }
                }
            }
        }
        return dp[n];
    }
}
