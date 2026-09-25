import java.util.HashMap;
import java.util.Map;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int val) {
            this.val = val;
        }
    }

    private int index;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> positions = new HashMap<>();
        int n = inorder.length;
        index = 0;
        for (int i = 0; i < n; i++) {
            positions.put(inorder[i], i);
        }
        return build(preorder, positions, 0, n - 1);
    }

    private TreeNode build(int[] preorder, Map<Integer, Integer> positions, int l, int r) {
        if (l > r) {
            return null;
        }
        int nodeVal = preorder[index];
        TreeNode node = new TreeNode(nodeVal);

        int m = positions.get(nodeVal);
        index++;

        node.left = build(preorder, positions, l, m - 1);
        node.right = build(preorder, positions, m + 1, r);
        return node;
    }
}
