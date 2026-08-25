class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public TreeNode invertTree(TreeNode root) {
        if (root != null) {
            TreeNode left = invertTree(root.right);
            TreeNode right = invertTree(root.left);
            root.left = left;
            root.right = right;
        }
        return root;
    }
}
