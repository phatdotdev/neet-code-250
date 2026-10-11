class Solution {
    solveNQueens(n: number): string[][] {
        const solutions: string[][] = [];

        const usedCols: boolean[] = new Array(n).fill(false);
        const usedAntiDiagonals = new Array(2 * n - 1).fill(false);
        const usedMainDiagonals = new Array(2 * n - 1).fill(false);

        const rowTemplate: string[] = new Array(n).fill(".");

        function backtrack(row: number, currentBoard: string[]) {
            if (row === n) {
                solutions.push([...currentBoard]);
                return;
            }
            for (let col = 0; col < n; col++) {
                const antiDiagIndex = row + col;
                const mainDiagIndex = row - col + (n - 1);
                if (
                    !usedCols[col] &&
                    !usedAntiDiagonals[antiDiagIndex] &&
                    !usedMainDiagonals[mainDiagIndex]
                ) {
                    usedCols[col] = true;
                    usedAntiDiagonals[antiDiagIndex] = true;
                    usedMainDiagonals[mainDiagIndex] = true;
                    rowTemplate[col] = "Q";
                    currentBoard.push(rowTemplate.join(""));
                    rowTemplate[col] = ".";

                    backtrack(row + 1, currentBoard);

                    currentBoard.pop();
                    usedCols[col] = false;
                    usedAntiDiagonals[antiDiagIndex] = false;
                    usedMainDiagonals[mainDiagIndex] = false;
                }
            }
        }

        backtrack(0, []);

        return solutions;
    }
}
