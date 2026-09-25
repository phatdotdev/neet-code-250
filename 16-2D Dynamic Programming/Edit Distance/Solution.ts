class Solution {
    minDistance(word1: string, word2: string): number {
        const n: number = word1.length;
        const m: number = word2.length;
        const dp: number[] = Array.from({ length: m + 1 }, (v, k) => k);
        for (let i = 1; i <= n; i++) {
            let prev = dp[0];
            dp[0]++;
            const ch1 = word1.charCodeAt(i - 1);
            for (let j = 1; j <= m; j++) {
                const temp = dp[j];
                const ch2 = word2.charCodeAt(j - 1);
                if (ch1 === ch2) {
                    dp[j] = prev;
                } else {
                    dp[j] = 1 + Math.min(prev, Math.min(dp[j - 1], dp[j]));
                }
                prev = temp;
            }
        }
        return dp[m];
    }
}
