class Solution {
    longestIncreasingPath(matrix: number[][]): number {
        if (matrix === null || matrix.length === 0) {
            return 0;
        }
        const n: number = matrix.length;
        const m: number = matrix[0].length;
        const dp: number[][] = Array.from({ length: n }, (v, k) =>
            new Array(m).fill(-1),
        );
        let result = 0;
        const dirs: number[][] = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0],
        ];
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                result = Math.max(result, dfs(r, c));
            }
        }

        return result;
        function dfs(r: number, c: number): number {
            if (dp[r][c] !== -1) {
                return dp[r][c];
            }
            let maxPath = 1;
            for (const dir of dirs) {
                const nr = r + dir[0];
                const nc = c + dir[1];
                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < m &&
                    matrix[r][c] > matrix[nr][nc]
                ) {
                    maxPath = Math.max(maxPath, dfs(nr, nc) + 1);
                }
            }
            dp[r][c] = maxPath;
            return dp[r][c];
        }
    }
}
