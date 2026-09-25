
class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        int[] root = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            root[i] = i;
        }
        for (int[] edge : edges) {
            int bigRoot = Math.max(root[edge[0]], root[edge[1]]);
            int smallRoot = Math.min(root[edge[0]], root[edge[1]]);
            if (bigRoot == smallRoot) {
                return edge;
            }
            for (int i = 1; i <= n; i++) {
                if (root[i] == bigRoot) {
                    root[i] = smallRoot;
                }
            }
        }
        return new int[] {};
    }
}
