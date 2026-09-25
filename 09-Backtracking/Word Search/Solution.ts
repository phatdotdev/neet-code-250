class Solution {
    exist(board: string[][], word: string): boolean {
        const n = board.length;
        const m = board[0].length;
        if (word.length > n * m) return false;

        const count: number[] = new Array(128).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                count[board[i][j].charCodeAt(0)]++;
            }
        }
        for (const c of word) {
            if (--count[c.charCodeAt(0)] < 0) return false;
        }

        if (
            count[word.charCodeAt(0)] > count[word.charCodeAt(word.length - 1)]
        ) {
            word = word.split("").reverse().join("");
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (search(i, j, 0)) {
                    return true;
                }
            }
        }

        function search(i: number, j: number, k: number): boolean {
            if (k === word.length) {
                return true;
            }
            if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== word[k]) {
                return false;
            }
            const temp = board[i][j];
            board[i][j] = "#";
            const found =
                search(i + 1, j, k + 1) ||
                search(i - 1, j, k + 1) ||
                search(i, j - 1, k + 1) ||
                search(i, j + 1, k + 1);
            board[i][j] = temp;
            return found;
        }

        return false;
    }
}
