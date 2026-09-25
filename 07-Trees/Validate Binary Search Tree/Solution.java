
class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean validate(TreeNode root, long min, long max) {
        if (root == null) {
            return true;
        }
        if (root.val <= min || root.val >= max)
            return false;
        if (!validate(root.left, min, root.val)) {
            return false;
        }
        return validate(root.right, root.val, max);
    }
}
