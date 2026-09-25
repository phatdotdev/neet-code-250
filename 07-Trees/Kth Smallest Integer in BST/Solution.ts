class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}
class Solution {
    kthSmallest(root: TreeNode | null, k: number): number {
        let curr = root!;
        let res = -1;
        while (curr !== null) {
            if (curr.left === null) {
                k--;
                if (k === 0) {
                    res = curr.val;
                }
                curr = curr.right!;
            } else {
                let temp = curr.left;
                while (temp.right !== null && temp.right !== curr) {
                    temp = temp.right;
                }
                if (temp.right === curr) {
                    temp.right = null;
                    k--;
                    if (k === 0) {
                        res = curr.val;
                    }
                    curr = curr.right!;
                } else {
                    temp.right = curr;
                    curr = curr.left;
                }
            }
        }
        return res;
    }
}
