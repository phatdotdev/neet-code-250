class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (root === null) return root!;
        if (root.val === key) {
            if (root.left === null) {
                return root.right!;
            } else if (root.right === null) {
                return root.left!;
            } else {
                let successor = root.right;
                let prev: TreeNode | null = null;
                while (successor.left !== null) {
                    prev = successor;
                    successor = successor.left;
                }
                root.val = successor.val;
                if (prev !== null) {
                    prev.left = successor.right;
                } else {
                    root.right = successor.right;
                }
            }
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            root.right = this.deleteNode(root.right, key);
        }
        return root;
    }
}
