class Solution {
    searchMatrix(matrix: number[][], target: number): boolean {
        const n = matrix.length,
            m = matrix[0].length;
        let l = 0,
            r = m * n - 1;
        while (l <= r) {
            const c = l + Math.floor((r - l) / 2);
            const val = matrix[Math.floor(c / m)][c % m];
            if (val === target) {
                return true;
            } else if (val < target) {
                l = c + 1;
            } else {
                r = c - 1;
            }
        }
        return false;
    }
}
