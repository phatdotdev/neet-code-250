class Solution {
    stoneGameII(piles: number[]): number {
        const n: number = piles.length;
        const suffix: number[] = Array(n + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] + piles[i];
        }
        const memo: number[][] = Array.from({ length: n + 1 }, () =>
            new Array(n + 1).fill(0),
        );
        function solve(i: number, m: number): number {
            if (i + 2 * m >= n) {
                return suffix[i];
            }
            if (memo[i][m]) {
                return memo[i][m];
            }
            let maxSum = 0;
            for (let x = 1; x <= m * 2; x++) {
                const currentSum = suffix[i] - solve(i + x, Math.max(m, x));
                maxSum = Math.max(maxSum, currentSum);
            }
            memo[i][m] = maxSum;
            return maxSum;
        }
        return solve(0, 1);
    }
}
