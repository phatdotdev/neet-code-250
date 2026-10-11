import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    class Solution1 {
        public boolean canTraverseAllPairs(int[] nums) {
            int n = nums.length;
            boolean[][] graph = new boolean[n][n];
            for (int i = 0; i < n - 1; i++) {
                int a = nums[i];
                for (int j = i + 1; j < n; j++) {
                    int b = nums[j];
                    if (GCD(a, b) > 1) {
                        graph[i][j] = true;
                        graph[j][i] = true;
                    }
                }
            }
            for (int k = 0; k < n; k++) {
                for (int u = 0; u < n; u++) {
                    for (int v = 0; v < n; v++) {
                        graph[u][v] = graph[u][v] || (graph[u][k] && graph[k][v]);
                    }
                }
            }
            for (int u = 0; u < n; u++) {
                for (int v = 0; v < n; v++) {
                    if (u == v) {
                        continue;
                    }
                    if (!graph[u][v]) {
                        return false;
                    }
                }
            }
            return true;
        }

        private int GCD(int a, int b) {
            while (b != 0) {
                int temp = a % b;
                a = b;
                b = temp;
            }
            return a;
        }
    }

    class Solution2 {

        public boolean canTraverseAllPairs(int[] nums) {
            List<int[]> edges = new ArrayList<>();

            int n = nums.length;
            for (int i = 0; i < n - 1; i++) {
                int a = nums[i];
                for (int j = i + 1; j < n; j++) {
                    int b = nums[j];
                    if (GCD(a, b) > 1) {
                        edges.add(new int[] { i, j });
                    }
                }
            }
            int edgeCount = 0;
            int[] parent = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }

            for (int[] edge : edges) {
                int u = edge[0];
                int v = edge[1];
                int rootU = findRoot(parent, u);
                int rootV = findRoot(parent, v);
                if (rootU != rootV) {
                    edgeCount++;
                    parent[rootV] = rootU;
                    if (edgeCount == n - 1) {
                        return true;
                    }
                }
            }
            return edgeCount == n - 1;
        }

        private int findRoot(int[] parent, int x) {
            if (x != parent[x]) {
                parent[x] = findRoot(parent, parent[x]);
            }
            return parent[x];
        }

        private int GCD(int a, int b) {
            while (b != 0) {
                int temp = a % b;
                a = b;
                b = temp;
            }
            return a;
        }
    }
}
