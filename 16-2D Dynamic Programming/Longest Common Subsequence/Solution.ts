class Solution {
    longestCommonSubsequence(text1: string, text2: string): number {
        const n = text1.length;
        const m = text2.length;
        const dp: number[] = new Array(m + 1).fill(0);
        dp[0] = 0;
        for (let i = 1; i <= n; i++) {
            let prev = dp[0];
            for (let j = 1; j <= m; j++) {
                const temp = dp[j];
                if (text1[i - 1] === text2[j - 1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = Math.max(dp[j], dp[j - 1]);
                }
                prev = temp;
            }
        }
        return dp[m];
    }
}
