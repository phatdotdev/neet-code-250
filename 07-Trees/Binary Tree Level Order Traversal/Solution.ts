class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    levelOrder(root: TreeNode | null): number[][] {
        const res: number[][] = [];
        if (root === null) return res;
        let i = 0;
        const queue: TreeNode[] = [];
        queue.push(root);
        while (i < queue.length) {
            let levelSize = queue.length;
            const levelNodes: number[] = [];
            while (i < levelSize) {
                const node = queue[i++];
                levelNodes.push(node.val);
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
            res.push(levelNodes);
        }
        return res;
    }
}
