import javax.swing.tree.TreeNode;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public int maxPathSum(TreeNode root) {
        return maxHeightAndPathSum(root)[1];
    }

    private int[] maxHeightAndPathSum(TreeNode root) {
        if (root == null) {
            return new int[] { 0, Integer.MIN_VALUE };
        }
        int[] left = maxHeightAndPathSum(root.left);
        int[] right = maxHeightAndPathSum(root.right);
        int maxHeightLeft = left[0], maxPathSumLeft = left[1];
        int maxHeightRight = right[0], maxPathSumRight = right[1];
        int maxHeight = Math.max(Math.max(maxHeightLeft, maxHeightRight) + root.val, 0);
        int maxPathSum = Math.max(
                Math.max(maxPathSumLeft, maxPathSumRight),
                root.val + maxHeightLeft + maxHeightRight);
        return new int[] { maxHeight, maxPathSum };
    }
}
