import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode curr = stack.pop();
            if (p.val < curr.val && q.val < curr.val && curr.left != null) {
                stack.push(curr.left);
            } else if (p.val > curr.val && q.val > curr.val && curr.right != null) {
                stack.push(curr.right);
            } else
                return curr;
        }
        return null;
    }
}
