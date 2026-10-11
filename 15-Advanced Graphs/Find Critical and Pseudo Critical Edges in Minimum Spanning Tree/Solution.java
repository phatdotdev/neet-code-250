import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> findCriticalAndPseudoCriticalEdges(int n, int[][] edges) {
        int m = edges.length;
        int[][] sortedEdges = new int[m][4];
        for (int i = 0; i < m; i++) {
            sortedEdges[i] = new int[] { edges[i][0], edges[i][1], edges[i][2], i };
        }
        Arrays.sort(sortedEdges, (a, b) -> Integer.compare(a[2], b[2]));
        int mstWeight = kruskal(n, sortedEdges, -1, -1);

        List<Integer> critical = new ArrayList<>();
        List<Integer> pseudoCritical = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            int originalIndex = sortedEdges[i][3];
            int withoutEdge = kruskal(n, sortedEdges, originalIndex, -1);
            if (withoutEdge > mstWeight) {
                critical.add(originalIndex);
                continue;
            }
            int withEdge = kruskal(n, sortedEdges, -1, originalIndex);
            if (withEdge == mstWeight) {
                pseudoCritical.add(originalIndex);
            }
        }

        List<List<Integer>> answer = new ArrayList<>();
        answer.add(critical);
        answer.add(pseudoCritical);
        return answer;
    }

    private int kruskal(int n, int[][] edges, int excludeIndex, int forcedIndex) {
        DSU dsu = new DSU(n);
        int totalWeight = 0;
        int edgeCount = 0;
        if (forcedIndex != -1) {
            for (int[] edge : edges) {
                if (edge[3] == forcedIndex) {
                    dsu.union(edge[0], edge[1]);
                    totalWeight += edge[2];
                    edgeCount++;
                    break;
                }
            }
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int weight = edge[2];
            int index = edge[3];
            if (index == forcedIndex || index == excludeIndex) {
                continue;
            }
            if (dsu.union(u, v)) {
                totalWeight += weight;
                edgeCount++;
            }

            if (edgeCount == n - 1) {
                break;
            }
        }

        if (edgeCount != n - 1) {
            return Integer.MAX_VALUE;
        }
        return totalWeight;
    }

    static class DSU {
        int[] parent;
        int[] rank;

        DSU(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }

        int find(int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        }

        boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);

            if (rootX == rootY) {
                return false;
            }

            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            return true;
        }
    }
}