class Solution {
    totalNQueens(n: number): number {
        const cols: boolean[] = new Array(n).fill(false);
        const diag1: boolean[] = new Array(2 * n - 1).fill(false);
        const diag2: boolean[] = new Array(2 * n - 1).fill(false);

        function backtrack(r: number): number {
            if (r === n) {
                return 1;
            }
            let count = 0;
            for (let c = 0; c < n; c++) {
                const i1 = r + c;
                const i2 = r - c + (n - 1);
                if (!cols[c] && !diag1[i1] && !diag2[i2]) {
                    cols[c] = true;
                    diag1[i1] = true;
                    diag2[i2] = true;
                    count += backtrack(r + 1);
                    cols[c] = false;
                    diag1[i1] = false;
                    diag2[i2] = false;
                }
            }
            return count;
        }

        return backtrack(0);
    }
}
