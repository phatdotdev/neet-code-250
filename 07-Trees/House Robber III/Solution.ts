class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    rob(root: TreeNode | null) {
        function robSub(root: TreeNode | null): number[] {
            if (root === null) {
                return [0, 0];
            }
            const left = robSub(root.left);
            const right = robSub(root.right);
            const robVal = root.val + left[0] + right[0];
            const skipVal =
                Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
            return [skipVal, robVal];
        }
        const [skipVal, robVal] = robSub(root);
        return Math.max(skipVal, robVal);
    }
}
