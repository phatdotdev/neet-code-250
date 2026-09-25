class Solution {

    private int[][] memo;
    private int[] suffixSum;
    private int n;

    public int stoneGameII(int[] piles) {
        n = piles.length;
        suffixSum = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] + piles[i];
        }
        memo = new int[n + 1][n + 1];
        return solve(0, 1);
    }

    private int solve(int i, int m) {
        if (n - i <= m * 2) {
            return suffixSum[i];
        }

        if (memo[i][m] != 0) {
            return memo[i][m];
        }

        int maxStone = 0;

        for (int x = 1; x <= m * 2; x++) {
            int currStone = suffixSum[i] - solve(i + x, Math.max(x, m));
            maxStone = Math.max(maxStone, currStone);
        }

        memo[i][m] = maxStone;
        return memo[i][m];
    }

}
