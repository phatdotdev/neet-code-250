import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution {
    class Solution1 {
        public List<Integer> findMinHeightTrees(int n, int[][] edges) {
            int[][] graph = new int[n][n];
            Arrays.fill(graph, n);
            int[] height = new int[n];

            for (int[] edge : edges) {
                int u = edge[0], v = edge[1];
                graph[u][v] = 1;
                graph[v][u] = 1;
                height[u] = 1;
                height[v] = 1;
            }

            for (int k = 0; k < n; k++) {
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < n; j++) {
                        graph[i][j] = Math.min(graph[i][k] + graph[k][j], graph[i][j]);
                        height[i] = Math.max(height[i], graph[i][j]);
                    }
                }
            }
            int min = n;
            List<Integer> res = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                if (height[i] <= min) {
                    if (height[i] < min) {
                        res.clear();
                        min = height[i];
                    }
                    res.add(i);
                }
            }
            return res;
        }
    }

    class Solution2 {
        public List<Integer> findMinHeightTrees(int n, int[][] edges) {
            if (n == 1) {
                return List.of(0);
            }
            List<List<Integer>> graph = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                graph.add(new ArrayList<>());
            }
            int[] degree = new int[n];
            for (int[] edge : edges) {
                int u = edge[0], v = edge[1];
                graph.get(u).add(v);
                graph.get(v).add(u);
                degree[u]++;
                degree[v]++;
            }
            Queue<Integer> queue = new LinkedList<>();
            for (int i = 0; i < n; i++) {
                if (degree[i] == 1) {
                    queue.offer(i);
                }
            }
            int remaining = n;
            while (remaining > 2) {
                int size = queue.size();
                remaining -= size;
                for (int i = 0; i < size; i++) {
                    int leaf = queue.poll();
                    for (int neighbor : graph.get(leaf)) {
                        degree[neighbor]--;
                        if (degree[neighbor] == 1) {
                            queue.offer(neighbor);
                        }
                    }
                }
            }

            return new ArrayList<>(queue);
        }
    }
}