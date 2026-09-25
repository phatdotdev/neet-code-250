class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length;
        int m = matrix[0].length;
        int l = 0;
        int r = m * n - 1;
        while (l <= r) {
            int c = l + (r - l) / 2;
            if (matrix[c / m][c % m] == target) {
                return true;
            } else if (matrix[c / m][c % m] > target) {
                r = c - 1;
            } else {
                l = c + 1;
            }
        }
        return false;
    }
}