class Solution {
    stoneGame(piles: number[]): boolean {
        const n: number = piles.length;
        const memo: number[][] = Array.from({ length: n }, (v, k) =>
            new Array(n).fill(0),
        );
        function resolve(i: number, j: number): number {
            if (i === j) {
                return piles[i];
            }
            if (memo[i][j] != 0) {
                return memo[i][j];
            }
            const pickLeft = piles[i] - resolve(i + 1, j);
            const pickRight = piles[j] - resolve(i, j - 1);
            memo[i][j] = Math.max(pickLeft, pickRight);
            return memo[i][j];
        }
        return resolve(0, n - 1) > 0;
    }
}

class Solution2 {
    stoneGame(piles: number[]): boolean {
        const n: number = piles.length;
        const dp: number[][] = Array.from({ length: n }, () =>
            new Array(n).fill(0),
        );
        for (let i = 0; i < n; i++) {
            dp[i][i] = piles[i];
        }
        for (let size = 2; size <= n; size++) {
            for (let i = 0; i <= n - size; i++) {
                const j = i + size - 1;
                dp[i][j] = Math.max(
                    piles[i] - dp[i + 1][j],
                    piles[j] - dp[i][j - 1],
                );
            }
        }
        return dp[0][n - 1] > 0;
    }
}

class Solution3 {
    stoneGame(piles: number[]): boolean {
        const n: number = piles.length;
        const dp: number[] = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            dp[i] = piles[i];
        }
        for (let i = n - 2; i >= 0; i--) {
            for (let j = i + 1; j < n; j++) {
                dp[j] = Math.max(piles[j] - dp[j - 1], piles[i] - dp[j]);
            }
        }
        return dp[n - 1] > 0;
    }
}
