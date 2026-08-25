class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor() {
        this.val = 0;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    inorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        this.dfs(root, res);
        return res;
    }

    private dfs(node: TreeNode | null, res: number[]): void{
        if(node === null){
            return;
        }
        this.dfs(node.left, res);
        res.push(node.val);
        this.dfs(node.right, res);
    }
}