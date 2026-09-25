class Solution {

    class Solution1 {
        class NumMatrix {

            private int[][] matrix;

            public NumMatrix(int[][] matrix) {
                this.matrix = new int[matrix.length][matrix[0].length];
                for (int i = 0; i < matrix.length; i++) {
                    for (int j = 0; j < matrix[0].length; j++) {
                        this.matrix[i][j] = matrix[i][j];
                    }
                }
            }

            public int sumRegion(int row1, int col1, int row2, int col2) {
                int total = 0;
                for (int r = row1; r <= row2; r++) {
                    for (int c = col1; c <= col2; c++) {
                        total += matrix[r][c];
                    }
                }
                return total;
            }
        }
    }

    class Solution2 {

        class NumMatrix {

            private int n;
            private int m;
            private int[][] s;

            public NumMatrix(int[][] matrix) {
                n = matrix.length;
                m = matrix[0].length;
                s = new int[n][m];
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < m; j++) {
                        s[i][j] = matrix[i][j];
                        if (i > 0 && j > 0) {
                            s[i][j] += (s[i][j - 1] + s[i - 1][j] - s[i - 1][j - 1]);
                        } else if (i > 0) {
                            s[i][j] += s[i - 1][j];
                        } else if (j > 0) {
                            s[i][j] += s[i][j - 1];
                        }
                    }
                }
            }

            public int sumRegion(int row1, int col1, int row2, int col2) {
                int res = s[row2][col2];
                if (row1 > 0 && col1 > 0) {
                    res += (s[row1 - 1][col1 - 1] - s[row1 - 1][col2] - s[row2][col1 - 1]);
                } else if (row1 > 0) {
                    res -= s[row1 - 1][col2];
                } else if (col1 > 0) {
                    res -= s[row2][col1 - 1];
                }
                return res;
            }
        }
    }

}
