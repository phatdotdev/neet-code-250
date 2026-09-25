
class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public int rob(TreeNode root) {
        if (root == null) {
            return 0;
        }
        rob(root.left);
        rob(root.right);
        int robVal = root.val + skip(root.left) + skip(root.right);
        int skipVal = skip(root);
        root.val = Math.max(robVal, skipVal);
        return root.val;
    }

    public int skip(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int val = 0;
        if (root.left != null) {
            val += root.left.val;
        }
        if (root.right != null) {
            val += root.right.val;
        }
        return val;
    }
}
