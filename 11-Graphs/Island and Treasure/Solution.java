import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public void islandsAndTreasure(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < m; c++) {
                if (grid[r][c] == 0) {
                    queue.offer(new int[] { r, c });
                }
            }
        }
        int[][] dirs = {
                { -1, 0 },
                { 0, -1 },
                { 0, 1 },
                { 1, 0 }
        };
        while (!queue.isEmpty()) {
            int size = queue.size();
            while (size-- > 0) {
                int[] cell = queue.poll();
                int r = cell[0], c = cell[1];
                for (int[] d : dirs) {
                    int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < n && nc >= 0 && nc < m &&
                            grid[nr][nc] > grid[r][c] + 1) {
                        grid[nr][nc] = grid[r][c] + 1;
                        queue.offer(new int[] { nr, nc });
                    }
                }
            }
        }
    }
}
