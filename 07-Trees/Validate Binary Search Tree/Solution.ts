class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    isValidBST(root: TreeNode | null): boolean {
        function validate(
            root: TreeNode | null,
            min: number,
            max: number,
        ): boolean {
            if (root === null) {
                return true;
            }
            if (root.val <= min || root.val >= max) {
                return false;
            }
            if (!validate(root.left, min, root.val)) {
                return false;
            }
            return validate(root.right, root.val, max);
        }
        return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
}
