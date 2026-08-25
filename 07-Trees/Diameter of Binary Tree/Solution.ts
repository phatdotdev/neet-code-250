class Solution {
    diameterOfBinaryTree(root: TreeNode | null): number {
      return this.dfs(root)[1];
    }

    private dfs(node: TreeNode | null): number[] {
        if(node === null) return [0, 0];
        const [maxHeightLeft, maxDiameterLeft] = this.dfs(node.left);
        const [maxHeightRight, maxDiameterRight] = this.dfs(node.right);
        return [
            Math.max(maxHeightLeft, maxHeightRight) + 1,         
            Math.max(maxHeightLeft + maxHeightRight,
                Math.max(maxDiameterLeft, maxDiameterRight)
            )
        ];
    }
}