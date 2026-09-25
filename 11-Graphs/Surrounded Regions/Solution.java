
class Solution {
    public void solve(char[][] board) {
        if (board == null || board.length == 0)
            return;
        int n = board.length;
        int m = board[0].length;

        for (int j = 0; j < m; j++) {
            dfs(0, j, board);
            dfs(n - 1, j, board);
        }

        for (int i = 0; i < n; i++) {
            dfs(i, 0, board);
            dfs(i, m - 1, board);
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                } else if (board[i][j] == '#') {
                    board[i][j] = 'O';
                }
            }
        }
    }

    private void dfs(int i, int j, char[][] board) {
        int n = board.length;
        int m = board[0].length;

        if (i < 0 || j < 0 || i >= n || j >= m) {
            return;
        }
        if (board[i][j] != 'O') {
            return;
        }

        board[i][j] = '#';
        dfs(i - 1, j, board);
        dfs(i + 1, j, board);
        dfs(i, j - 1, board);
        dfs(i, j + 1, board);
    }
}
