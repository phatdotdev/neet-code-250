class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }
        TreeNode curr = root;
        while (curr != null) {
            if (val > curr.val) {
                if (curr.right == null) {
                    curr.right = new TreeNode(val);
                    curr = null;
                } else {
                    curr = curr.right;
                }
            } else if (val < curr.val) {
                if (curr.left == null) {
                    curr.left = new TreeNode(val);
                    curr = null;
                } else {
                    curr = curr.left;
                }
            }
        }
        return root;
    }
}
