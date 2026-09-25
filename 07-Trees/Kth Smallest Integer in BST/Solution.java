import java.util.ArrayList;
import java.util.List;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public int kthSmallest(TreeNode root, int k) {
        List<Integer> nodes = new ArrayList<>();
        dfs(root, nodes);
        return nodes.get(k - 1);
    }

    private void dfs(TreeNode root, List<Integer> nodes) {
        if (root == null)
            return;
        dfs(root.left, nodes);
        nodes.add(root.val);
        dfs(root.right, nodes);
    }
}
