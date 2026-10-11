class Solution {
    isMatch(s: string, p: string): boolean {
        const m: number = s.length;
        const n: number = p.length;

        const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
            new Array(n + 1).fill(false),
        );
        dp[0][0] = true;
        for (let j = 2; j <= n; j++) {
            if (p[j - 1] === "*") {
                dp[0][j] = dp[0][j - 2];
            }
        }
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const charS = s[i - 1];
                const charP = p[j - 1];
                if (charP === charS || charP === ".") {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (charP === "*") {
                    dp[i][j] = dp[i][j - 2];
                    const prevCharP = p[j - 2];
                    if (prevCharP === charS || prevCharP === ".") {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
        return dp[m][n];
    }
}
