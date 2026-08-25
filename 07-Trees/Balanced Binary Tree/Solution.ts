class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    isBalanced(root: TreeNode | null): boolean {
        return this.dfs(root) !== -1;
    }

    private dfs(node: TreeNode | null): number {
        if(node == null){
            return 0;
        }

        const leftHeight = this.dfs(node.left);
        const rightHeight = this.dfs(node.right);
        
        if(leftHeight === -1 ||  rightHeight === -1){
            return -1;
        }

        if(Math.abs(leftHeight - rightHeight) > 1){
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }
}