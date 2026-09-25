import java.util.ArrayList;
import java.util.List;

class Solution {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) {
            return res;
        }
        List<TreeNode> queue = new ArrayList<>();
        queue.add(root);
        int index = 0;
        while (index < queue.size()) {
            int size = queue.size();
            res.add(queue.get(size - 1).val);
            while (index < size) {
                TreeNode node = queue.get(index);
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
                index++;
            }
        }
        return res;
    }
}
