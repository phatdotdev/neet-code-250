class Solution {
    public boolean isValidSudoku(char[][] board) {
        boolean[][] rows = new boolean[9][9];
        boolean[][] cols = new boolean[9][9];
        boolean[][][] boxs = new boolean[3][3][9];

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                char ch = board[r][c];
                if (ch != '.') {
                    int val = ch - '1';
                    if (rows[r][val] || cols[c][val] || boxs[r / 3][c / 3][val]) {
                        return false;
                    }
                    rows[r][val] = true;
                    cols[c][val] = true;
                    boxs[r / 3][c / 3][val] = true;
                }
            }
        }

        return true;
    }
}
