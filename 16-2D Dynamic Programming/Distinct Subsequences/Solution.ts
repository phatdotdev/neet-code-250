class Solution {
    numDistinct(s: string, t: string): number {
        const m = s.length;
        const n = t.length;

        const dp: number[] = new Array(n + 1).fill(0);
        dp[0] = 1;
        for (let j = 1; j <= m; j++) {
            for (let i = n; i >= 1; i--) {
                if (s[j - 1] === t[i - 1]) {
                    dp[i] += dp[i - 1];
                }
            }
        }
        return dp[n];
    }
}
