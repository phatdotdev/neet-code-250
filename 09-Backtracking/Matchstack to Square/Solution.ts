class Solution {
    makesquare(matchsticks: number[]): boolean {
        const n = matchsticks.length;
        const sum = matchsticks.reduce((p, c) => p + c);

        if (sum % 4 !== 0) {
            return false;
        }
        const target = sum / 4;
        const dp: number[] = new Array(1 << n).fill(-1);
        dp[0] = 0;

        for (let mask = 0; mask < dp.length; mask++) {
            if (dp[mask] === -1) {
                continue;
            }
            for (let i = 0; i < n; i++) {
                if ((mask & (1 << i)) === 0) {
                    const m = mask | (1 << i);
                    if (
                        (dp[mask] % target) + matchsticks[i] <= target &&
                        dp[m] === -1
                    ) {
                        dp[m] = dp[mask] + matchsticks[i];
                    }
                }
            }
        }

        return dp[(1 << n) - 1] !== -1;
    }
}
