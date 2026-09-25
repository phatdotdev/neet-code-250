class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    goodNodes(root: TreeNode | null): number {
        function dfs(root: TreeNode | null, max: number): number {
            if (root === null) return 0;
            let count = 0;
            if (root.val >= max) {
                count++;
                max = root.val;
            }
            count += dfs(root.left, max);
            count += dfs(root.right, max);
            return count;
        }
        return dfs(root, -101);
    }
}
