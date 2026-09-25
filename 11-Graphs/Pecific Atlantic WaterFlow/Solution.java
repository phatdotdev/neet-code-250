import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> res = new ArrayList<>();
        if (heights == null || heights.length == 0 || heights[0].length == 0) {
            return res;
        }
        int n = heights.length;
        int m = heights[0].length;
        boolean[][] pacific = new boolean[n][m];
        boolean[][] atlantic = new boolean[n][m];
        for (int c = 0; c < m; c++) {
            dfs(heights, 0, c, pacific, heights[0][c]);
            dfs(heights, n - 1, c, atlantic, heights[n - 1][c]);
        }
        for (int r = 0; r < n; r++) {
            dfs(heights, r, 0, pacific, heights[r][0]);
            dfs(heights, r, m - 1, atlantic, heights[r][m - 1]);
        }
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < m; c++) {
                if (atlantic[r][c] && pacific[r][c]) {
                    res.add(List.of(r, c));
                }
            }
        }
        return res;
    }

    private void dfs(int[][] heights, int r, int c, boolean[][] visited, int prevHeight) {
        int n = heights.length;
        int m = heights[0].length;
        if (r < 0 || c < 0 || r >= n || c >= m || visited[r][c] || heights[r][c] < prevHeight) {
            return;
        }
        visited[r][c] = true;
        dfs(heights, r + 1, c, visited, heights[r][c]);
        dfs(heights, r - 1, c, visited, heights[r][c]);
        dfs(heights, r, c - 1, visited, heights[r][c]);
        dfs(heights, r, c + 1, visited, heights[r][c]);
    }
}
