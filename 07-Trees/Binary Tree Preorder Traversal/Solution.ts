class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(){
        this.val = 0;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    preorderTraversal(root: TreeNode | null){
        const res: number[] = [];
        this.dfs(root, res);
        return res;
    }

    private dfs(node: TreeNode | null, res: number[]){
        if(node === null){
            return;
        }
        res.push(node.val);
        this.dfs(node.left, res);
        this.dfs(node.right, res);
    }
}

