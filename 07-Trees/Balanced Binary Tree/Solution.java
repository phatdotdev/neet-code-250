import java.util.HashMap;
import java.util.Map;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public boolean isBalanced(TreeNode root) {
        Map<TreeNode, Integer> heights = new HashMap<>();
        return dfs(root, heights);
    }

    private boolean dfs(TreeNode node, Map<TreeNode, Integer> heights) {
        if (node == null)
            return true;
        if (!dfs(node.left, heights)) {
            return false;
        }
        if (!dfs(node.right, heights)) {
            return false;
        }
        int leftHeight = heights.getOrDefault(node.left, 0);
        int rightHeight = heights.getOrDefault(node.right, 0);

        heights.put(node, Math.max(leftHeight, rightHeight) + 1);
        return Math.abs(leftHeight - rightHeight) <= 1;
    }
}
