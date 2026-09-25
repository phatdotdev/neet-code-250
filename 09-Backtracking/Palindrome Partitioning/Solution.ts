class Solution {
    partition(s: string): string[][] {
        const n = s.length;
        const res: string[][] = [];
        const curr: string[] = [];
        const dp: boolean[][] = Array.from({ length: n }, (k) =>
            new Array(n).fill(0),
        );
        for (let r = 0; r < n; r++) {
            for (let l = 0; l <= r; l++) {
                if (s[l] === s[r] && (r - l < 2 || dp[l + 1][r - 1])) {
                    dp[l][r] = true;
                }
            }
        }
        function backtrack(i: number) {
            if (i === n) {
                res.push([...curr]);
                return;
            }
            for (let j = i; j < n; j++) {
                if (dp[i][j]) {
                    curr.push(s.substring(i, j + 1));
                    backtrack(j + 1);
                    curr.pop();
                }
            }
        }
        backtrack(0);
        return res;
    }
}
