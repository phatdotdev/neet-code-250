class Solution {
    solve(board: string[][]): void {
        if (board === null || board.length === 0) {
            return;
        }
        const n = board.length;
        const m = board[0].length;
        function dfs(i: number, j: number): void {
            if (i < 0 || j < 0 || i >= n || j >= m) {
                return;
            }
            if (board[i][j] !== "O") {
                return;
            }
            board[i][j] = "#";
            dfs(i - 1, j);
            dfs(i, j - 1);
            dfs(i + 1, j);
            dfs(i, j + 1);
        }
        for (let i = 0; i < n; i++) {
            dfs(i, 0);
            dfs(i, m - 1);
        }
        for (let j = 0; j < m; j++) {
            dfs(0, j);
            dfs(n - 1, j);
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === "O") {
                    board[i][j] = "X";
                } else if (board[i][j] === "#") {
                    board[i][j] = "O";
                }
            }
        }
    }
}
