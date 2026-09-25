class Solution {
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const n = s1.length;
        const m = s2.length;
        if (m + n != s3.length) {
            return false;
        }
        if (m > n) {
            return this.isInterleave(s2, s1, s3);
        }
        const dp: boolean[] = new Array(m + 1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= m; i++) {
            dp[i] = dp[i - 1] && s2[i - 1] === s3[i - 1];
        }
        for (let i = 1; i <= n; i++) {
            dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
            let hasTrue = dp[0];
            for (let j = 1; j <= m; j++) {
                dp[j] =
                    (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
                    (dp[j - 1] && s2[j - 1] === s3[j + i - 1]);
                if (dp[j]) {
                    hasTrue = true;
                }
            }
            if (!hasTrue) {
                return false;
            }
        }

        return dp[m];
    }
}
