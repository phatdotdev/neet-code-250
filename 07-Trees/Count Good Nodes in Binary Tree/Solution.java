class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public int goodNodes(TreeNode root) {
        return dfs(root, Integer.MIN_VALUE);
    }

    private int dfs(TreeNode root, int max) {
        if (root == null) {
            return 0;
        }
        int count = 0;
        if (root.val >= max) {
            max = root.val;
            count++;
        }
        count += dfs(root.left, max);
        count += dfs(root.right, max);
        return count;
    }
}
