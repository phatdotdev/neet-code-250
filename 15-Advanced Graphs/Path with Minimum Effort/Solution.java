import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {

    public int minimumEffortPath(int[][] heights) {
        int n = heights.length;
        int m = heights[0].length;
        int[][] efforts = new int[n][m];
        for (int[] effort : efforts) {
            Arrays.fill(effort, Integer.MAX_VALUE);
        }
        PriorityQueue<int[]> pq = new PriorityQueue<>(
                (a, b) -> Integer.compare(a[0], b[0]));
        pq.offer(new int[] { 0, 0, 0 });
        int[][] dirs = {
                { -1, 0 },
                { 0, -1 },
                { 0, 1 },
                { 1, 0 }
        };
        while (!pq.isEmpty()) {
            int[] cell = pq.poll();
            int e = cell[0], r = cell[1], c = cell[2];
            if (r == n - 1 && c == m - 1) {
                return e;
            }
            if (e > efforts[r][c]) {
                continue;
            }
            for (int[] dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
                    int effort = Math.max(e, Math.abs(heights[nr][nc] - heights[r][c]));
                    if (effort < efforts[nr][nc]) {
                        efforts[nr][nc] = effort;
                        pq.offer(new int[] { effort, nr, nc });
                    }
                }
            }
        }
        return 0;
    }
}