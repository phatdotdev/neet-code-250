class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val: number = 0,
        left: TreeNode | null = null,
        right: TreeNode | null,
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    maxPathSum(root: TreeNode | null): number {
        function helper(root: TreeNode | null): number[] {
            if (root === null) {
                return [0, -Infinity];
            }
            const left: number[] = helper(root.left);
            const right: number[] = helper(root.right);

            const leftGain = left[0];
            const rightGain = right[0];

            const maxPathLeft = left[1];
            const maxPathRight = right[1];

            const maxGain = Math.max(
                Math.max(leftGain, rightGain) + root.val,
                0,
            );
            const currentMaxPath = Math.max(
                Math.max(maxPathLeft, maxPathRight),
                root.val + leftGain + rightGain,
            );
            return [maxGain, currentMaxPath];
        }
        return helper(root)[1];
    }
}
