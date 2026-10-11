class Solution {
    public int totalNQueens(int n) {
        boolean[] usedCols = new boolean[n];
        boolean[] usedAntiDiagonals = new boolean[2 * n - 1];
        boolean[] usedMainDiagonals = new boolean[2 * n - 1];

        return backtrack(0, n, usedCols, usedAntiDiagonals, usedMainDiagonals);
    }

    private int backtrack(int row, int boardSize, boolean[] usedCols, boolean[] usedAntiDiagonals,
            boolean[] usedMainDiagonals) {
        if (row == boardSize) {
            return 1;
        }
        int totalCount = 0;
        for (int col = 0; col < boardSize; col++) {
            int antiDiagIndex = row + col;
            int mainDiagIndex = row - col + (boardSize - 1);
            if (!usedCols[col] && !usedAntiDiagonals[antiDiagIndex] && !usedMainDiagonals[mainDiagIndex]) {
                usedCols[col] = true;
                usedAntiDiagonals[antiDiagIndex] = true;
                usedMainDiagonals[mainDiagIndex] = true;
                totalCount += backtrack(row + 1, boardSize, usedCols, usedAntiDiagonals, usedMainDiagonals);
                usedCols[col] = false;
                usedAntiDiagonals[antiDiagIndex] = false;
                usedMainDiagonals[mainDiagIndex] = false;
            }
        }
        return totalCount;
    }
}
