class Solution {
    maxCoins(nums: number[]): number {
        const n: number = nums.length;
        nums.unshift(1);
        nums.push(1);

        const dp: number[][] = Array.from({ length: n + 2 }, () =>
            new Array(n + 2).fill(0),
        );

        for (let len = 1; len <= n; len++) {
            for (let i = 1; i <= n - len + 1; i++) {
                const j = i + len - 1;
                for (let k = i; k <= j; k++) {
                    const gain = nums[i - 1] * nums[k] * nums[j + 1];
                    const remaining = dp[i][k - 1] + dp[k + 1][j];
                    dp[i][j] = Math.max(dp[i][j], gain + remaining);
                }
            }
        }

        return dp[1][n];
    }
}
