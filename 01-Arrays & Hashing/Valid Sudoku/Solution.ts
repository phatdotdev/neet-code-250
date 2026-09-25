class Solution {
    isValidSudoku(board: string[][]): boolean {
        const rows: boolean[][] = Array.from({ length: 9 }, () =>
            new Array(9).fill(false),
        );
        const cols: boolean[][] = Array.from({ length: 9 }, () =>
            new Array(9).fill(false),
        );
        const boxs: boolean[][] = Array.from({ length: 9 }, () =>
            new Array(9).fill(false),
        );
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== ".") {
                    const num = board[r][c].charCodeAt(0) - "1".charCodeAt(0);
                    const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    if (rows[r][num] || cols[c][num] || boxs[b][num]) {
                        return false;
                    }
                    rows[r][num] = true;
                    cols[c][num] = true;
                    boxs[b][num] = true;
                }
            }
        }
        return true;
    }
}
