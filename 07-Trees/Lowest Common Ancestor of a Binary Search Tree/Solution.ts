class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        function dfs(
            node: TreeNode | null,
            p: TreeNode | null,
            q: TreeNode | null,
        ) {
            if (node == null || p === null || q === null) return null;
            if (node.val > p.val && node.val > q.val) {
                return dfs(node.left, p, q);
            }
            if (node.val < p.val && node.val < q.val) {
                return dfs(node.right, p, q);
            }
            return node;
        }
        return dfs(root, p, q);
    }
}
