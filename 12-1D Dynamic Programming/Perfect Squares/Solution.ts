class Solution {
    numSquares(n: number): number {
        const dp: number[] = new Array(n + 1).fill(n);
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
}
