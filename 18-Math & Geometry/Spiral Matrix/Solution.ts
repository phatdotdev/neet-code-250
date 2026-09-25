class Solution {
    spiralOrder(matrix: number[][]): number[] {
        const res: number[] = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            top++;
            for (let j = top; j <= bottom; j++) {
                res.push(matrix[j][right]);
            }
            right--;
            if (top <= bottom) {
                for (let j = right; j >= left; j--) {
                    res.push(matrix[bottom][j]);
                }
                bottom--;
            }
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left]);
                }
                left++;
            }
        }

        return res;
    }
}
