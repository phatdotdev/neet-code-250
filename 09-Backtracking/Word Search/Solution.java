class Solution {
    public boolean exist(char[][] board, String word) {
        int n = board.length;
        int m = board[0].length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (search(i, j, board, 0, word)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean search(int i, int j, char[][] board, int k, String word) {

        if (board[i][j] != word.charAt(k)) {
            return false;
        }
        if (k == word.length() - 1) {
            return true;
        }
        int n = board.length;
        int m = board[0].length;
        char temp = board[i][j];
        board[i][j] = '.';
        boolean top = i > 0 && board[i - 1][j] != '.' && search(i - 1, j, board, k + 1, word);
        boolean left = j > 0 && board[i][j - 1] != '.' && search(i, j - 1, board, k + 1, word);
        boolean right = j < m - 1 && board[i][j + 1] != '.' && search(i, j + 1, board, k + 1, word);
        boolean bottom = i < n - 1 && board[i + 1][j] != '.' && search(i + 1, j, board, k + 1, word);
        board[i][j] = temp;
        return top || left || right || bottom;
    }
}
