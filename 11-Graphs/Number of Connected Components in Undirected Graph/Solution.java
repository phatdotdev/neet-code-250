class Solution {
    public int countComponents(int n, int[][] edges) {
        int count = n;

        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }

        for (int[] edge : edges) {
            int rootU = find(edge[0], parent);
            int rootV = find(edge[1], parent);

            if (rootU != rootV) {
                count--;
                parent[rootV] = rootU;
            }
        }

        return count;
    }

    private int find(int node, int[] parent) {
        if (node == parent[node]) {
            return node;
        }
        return find(parent[node], parent);
    }
}
