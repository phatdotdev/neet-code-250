import java.util.Arrays;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

class Solution {
    class Solution1 {
        public int swimInWater(int[][] grid) {
            int n = grid.length;

            int[][] graph = new int[n][n];
            for (int i = 0; i < n; i++) {
                Arrays.fill(graph[i], Integer.MAX_VALUE);
            }
            graph[0][0] = grid[0][0];

            Queue<int[]> queue = new LinkedList<>();
            queue.offer(new int[] { 0, 0, 0 });

            int[][] dirs = {
                    { -1, 0 },
                    { 1, 0 },
                    { 0, -1 },
                    { 0, 1 }
            };

            while (!queue.isEmpty()) {
                int[] cell = queue.poll();
                int r = cell[0];
                int c = cell[1];
                int t = cell[2];
                if (t > graph[r][c]) {
                    continue;
                }
                for (int[] dir : dirs) {
                    int nr = cell[0] + dir[0];
                    int nc = cell[1] + dir[1];
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                        int nt = Math.max(t, grid[nr][nc]);
                        if (graph[nr][nc] > nt) {
                            graph[nr][nc] = nt;
                            queue.offer(new int[] { nr, nc, nt });
                        }
                    }
                }
            }

            return graph[n - 1][n - 1];
        }
    }

    class Solution2 {
        public int swimInWater(int[][] grid) {
            int n = grid.length;
            int[][] graph = new int[n][n];
            for (int i = 0; i < n; i++) {
                Arrays.fill(graph[i], Integer.MAX_VALUE);
            }
            graph[0][0] = grid[0][0];

            PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[2], b[2]));
            pq.offer(new int[] { 0, 0, graph[0][0] });

            int[][] dirs = new int[][] {
                    { -1, 0 },
                    { 0, -1 },
                    { 0, 1 },
                    { 1, 0 }
            };

            while (!pq.isEmpty()) {
                int[] cell = pq.poll();
                int r = cell[0], c = cell[1], t = cell[2];
                if (r == n - 1 && c == n - 1) {
                    return t;
                }
                if (t > graph[r][c]) {
                    continue;
                }
                for (int[] dir : dirs) {
                    int nr = r + dir[0];
                    int nc = c + dir[1];
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                        int nt = Math.max(t, grid[nr][nc]);
                        if (nt < graph[nr][nc]) {
                            graph[nr][nc] = nt;
                            pq.offer(new int[] { nr, nc, nt });
                        }
                    }
                }
            }

            return graph[n - 1][n - 1];
        }
    }
}
