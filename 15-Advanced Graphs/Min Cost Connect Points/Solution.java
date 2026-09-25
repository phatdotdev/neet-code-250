import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    class Solution1 {
        class Edge {
            int[] u;
            int[] v;

            public Edge(int[] u, int[] v) {
                this.u = u;
                this.v = v;
            }

            private int distance() {
                return Math.abs(u[0] - v[0]) + Math.abs(u[1] - v[1]);
            }
        }

        public int minCostConnectPoints(int[][] points) {
            PriorityQueue<Edge> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.distance(), b.distance()));
            int n = points.length;
            for (int u = 0; u < n - 1; u++) {
                for (int v = u + 1; v < n; v++) {
                    pq.offer(new Edge(points[u], points[v]));
                }
            }
            int result = 0;
            Map<int[], int[]> parent = new HashMap<>();
            for (int[] point : points) {
                parent.put(point, point);
            }
            int i = 0;
            while (i < n - 1) {
                Edge edge = pq.poll();
                int[] u = edge.u;
                int[] v = edge.v;
                int[] rootU = find(parent, u);
                int[] rootV = find(parent, v);
                if (rootU.equals(rootV)) {
                    continue;
                } else {
                    parent.put(rootV, rootU);
                    result += edge.distance();
                    i++;
                }
            }
            return result;
        }

        private int[] find(Map<int[], int[]> parent, int[] point) {
            if (!parent.get(point).equals(point)) {
                parent.put(point, find(parent, parent.get(point)));
            }
            return parent.get(point);
        }
    }

    class Solution2 {
        public int minCostConnectPoints(int[][] points) {
            PriorityQueue<int[]> pq = new PriorityQueue<>(
                    (a, b) -> Integer.compare(a[2], b[2]));
            int n = points.length;
            for (int u = 0; u < n - 1; u++) {
                for (int v = u + 1; v < n; v++) {
                    int d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                    pq.offer(new int[] { u, v, d });
                }
            }
            int[] parent = new int[n];
            for (int u = 0; u < n; u++) {
                parent[u] = u;
            }
            int result = 0;
            int count = 0;
            while (count < n - 1) {
                int[] edge = pq.poll();
                int u = edge[0], v = edge[1], d = edge[2];
                int rootU = find(parent, u), rootV = find(parent, v);
                if (rootU != rootV) {
                    result += d;
                    parent[rootV] = rootU;
                    count++;
                }
            }

            return result;
        }

        private int find(int[] parent, int u) {
            if (parent[u] != u) {
                parent[u] = find(parent, parent[u]);
            }
            return parent[u];
        }
    }

    class Solution3 {
        public int minCostConnectPoints(int[][] points) {
            int n = points.length;
            List<int[]>[] graph = new List[n];
            for (int i = 0; i < n; i++) {
                graph[i] = new ArrayList<>();
            }
            for (int u = 0; u < n - 1; u++) {
                for (int v = u + 1; v < n; v++) {
                    int d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                    graph[u].add(new int[] { v, d });
                    graph[v].add(new int[] { u, d });
                }
            }
            boolean[] visited = new boolean[n];
            int[] minCost = new int[n];
            Arrays.fill(minCost, Integer.MAX_VALUE);
            minCost[0] = 0;
            int result = 0;
            for (int step = 0; step < n; step++) {
                int u = -1;
                int distance = Integer.MAX_VALUE;
                for (int j = 0; j < n; j++) {
                    if (!visited[j] && minCost[j] < distance) {
                        u = j;
                        distance = minCost[j];
                    }
                }
                visited[u] = true;
                result += distance;
                for (int[] neighbor : graph[u]) {
                    int v = neighbor[0];
                    int d = neighbor[1];
                    if (!visited[v] && minCost[v] > d) {
                        minCost[v] = d;
                    }
                }
            }
            return result;
        }
    }

    class Solution4 {
        public int minCostConnectPoints(int[][] points) {
            int n = points.length;
            boolean[] visited = new boolean[n];
            int[] minCost = new int[n];
            Arrays.fill(minCost, Integer.MAX_VALUE);

            minCost[0] = 0;
            int result = 0;

            for (int step = 0; step < n; step++) {
                int u = -1;
                int distance = Integer.MAX_VALUE;

                for (int j = 0; j < n; j++) {
                    if (!visited[j] && minCost[j] < distance) {
                        u = j;
                        distance = minCost[j];
                    }
                }

                visited[u] = true;
                result += distance;

                for (int v = 0; v < n; v++) {
                    if (!visited[v]) {
                        int d = Math.abs(points[u][0] - points[v][0])
                                + Math.abs(points[u][1] - points[v][1]);

                        if (d < minCost[v]) {
                            minCost[v] = d;
                        }
                    }
                }
            }

            return result;
        }
    }

}