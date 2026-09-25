class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}
class Solution {
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        if (root === null) return new TreeNode(val);
        function insert(node: TreeNode, val: number): void {
            if (val < node.val) {
                if (node.left === null) {
                    node.left = new TreeNode(val);
                } else {
                    insert(node.left, val);
                }
            }
            if (val > node.val) {
                if (node.right === null) {
                    node.right = new TreeNode(val);
                } else {
                    insert(node.right, val);
                }
            }
        }
        insert(root, val);
        return root;
    }
}
