class Solution {
    coinChange(coins: number[], amount: number): number {
        coins.sort((a, b) => a - b);
        const dp: number[] = new Array(amount + 1).fill(-1);
        dp[0] = 0;
        for (let i = 0; i <= amount; i++) {
            if (dp[i] === -1) continue;
            for (const coin of coins) {
                if (coin > amount || coin + i > amount) {
                    break;
                }
                if (dp[i + coin] == -1 || dp[i] + 1 < dp[i + coin]) {
                    dp[i + coin] = dp[i] + 1;
                }
            }
        }
        return dp[amount];
    }
}
