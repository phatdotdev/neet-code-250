import java.util.ArrayList;
import java.util.List;

public class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        dfs(root, res);
        return res;
    }

    public void dfs(TreeNode node, List<Integer> res) {
        if (node == null) {
            return;
        }
        res.add(node.val);
        dfs(node.left, res);
        dfs(node.right, res);
    }
}
