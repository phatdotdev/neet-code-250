class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    rightSideView(root: TreeNode | null): number[] {
        function dfs(root: TreeNode | null, level: number, result: number[]) {
            if (root === null) {
                return;
            }
            if (level === result.length) {
                result.push(root.val);
            }
            dfs(root.right, level + 1, result);
            dfs(root.left, level + 1, result);
        }
        const res: number[] = [];
        dfs(root, 0, res);
        return res;
    }
}
