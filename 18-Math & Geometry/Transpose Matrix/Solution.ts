class Solution {
    transpose(matrix: number[][]): number[][] {
        const n = matrix.length;
        const m = matrix[0].length;

        const res: number[][] = new Array(m);
        for (let i = 0; i < m; i++) {
            res[i] = new Array(n);
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                res[j][i] = matrix[i][j];
            }
        }

        return res;
    }
}
