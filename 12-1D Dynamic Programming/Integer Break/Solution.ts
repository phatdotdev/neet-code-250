class Solution {
    integerBreak(n: number): number {
        const dp: number[] = new Array(n + 1).fill(0);
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j < i; j++) {
                dp[i] = Math.max(
                    dp[i],
                    Math.max(dp[j], j) * Math.max(dp[i - j], i - j),
                );
            }
        }
        return dp[n];
    }
}
