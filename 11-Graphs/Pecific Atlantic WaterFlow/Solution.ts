class Solution {
    pacificAtlantic(heights: number[][]): number[][] {
        const res: number[][] = [];
        if (heights.length === null || heights.length === 0) {
            return res;
        }
        const n = heights.length;
        const m = heights[0].length;
        const pacific: boolean[][] = Array.from({ length: n }, (k) =>
            new Array(m).fill(false),
        );
        const atlantic: boolean[][] = Array.from({ length: n }, (k) =>
            new Array(m).fill(false),
        );
        for (let r = 0; r < n; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, m - 1, atlantic, heights[r][m - 1]);
        }
        for (let c = 0; c < m; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(n - 1, c, atlantic, heights[n - 1][c]);
        }
        function dfs(r: number, c: number, seen: boolean[][], height: number) {
            if (
                r < 0 ||
                c < 0 ||
                r >= n ||
                c >= m ||
                seen[r][c] ||
                height > heights[r][c]
            ) {
                return;
            }
            seen[r][c] = true;
            dfs(r - 1, c, seen, heights[r][c]);
            dfs(r + 1, c, seen, heights[r][c]);
            dfs(r, c - 1, seen, heights[r][c]);
            dfs(r, c + 1, seen, heights[r][c]);
        }
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
