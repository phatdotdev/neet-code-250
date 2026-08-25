import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

class Solution {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null)
            return 0;
        int maxDiameter = 0;

        Deque<TreeNode> stack = new ArrayDeque<>();
        Map<TreeNode, Integer> heights = new HashMap<>();

        TreeNode current = root;
        TreeNode lastVisited = null;

        while (current != null || !stack.isEmpty()) {
            if (current != null) {
                stack.push(current);
                current = current.left;
            } else {
                TreeNode peekNode = stack.peek();
                if (peekNode.right != null && lastVisited != peekNode.right) {
                    current = peekNode.right;
                } else {
                    stack.pop();

                    int leftHeight = heights.getOrDefault(peekNode.left, 0);
                    int rightHeight = heights.getOrDefault(peekNode.right, 0);

                    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
                    heights.put(peekNode, Math.max(leftHeight, rightHeight) + 1);

                    lastVisited = peekNode;
                }
            }
        }

        return maxDiameter;
    }
}
