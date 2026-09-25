class Solution {
    public boolean validTree(int n, int[][] edges) {
        int count = n;
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int uRoot = find(u, parent);
            int vRoot = find(v, parent);
            if (uRoot == vRoot) {
                return false;
            } else {
                count--;
                parent[vRoot] = uRoot;
            }

        }
        return count == 1;
    }

    private int find(int node, int[] parent) {
        if (node != parent[node]) {
            parent[node] = find(parent[node], parent);
        }
        return parent[node];
    }
}
