class Solution {

    int[][] dp;

    public boolean stoneGame(int[] piles) {
        int total = 0;
        for (int pile : piles) {
            total += pile;
        }
        int n = piles.length;
        dp = new int[n][n];
        for (int i = 0; i < n; i++) {
            dp[i][i] = piles[i];
        }
        int alice = solve(piles, 0, piles.length - 1);
        int bob = total - alice;
        return alice > bob;
    }

    private int solve(int[] piles, int i, int j) {
        if (dp[i][j] != 0) {
            return dp[i][j];
        }
        int total = 0;
        for (int k = i; k <= j; k++) {
            total += piles[k];
        }
        int res = Math.max(
                total - solve(piles, i + 1, j),
                total - solve(piles, i, j - 1));
        dp[i][j] = res;
        return res;
    }
}
