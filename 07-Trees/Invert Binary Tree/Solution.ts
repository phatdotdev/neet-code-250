class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    invertTree(root: TreeNode | null): TreeNode {
        if(root != null){
           [root.left, root.right] = [this.invertTree(root.right), this.invertTree(root.left)];
        }
        return root!;
    }
}