class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}

class Solution {
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let p = 0;
        function build(
            preorder: number[],
            positions: Map<number, number>,
            l: number,
            r: number,
        ): TreeNode | null {
            if (l > r) {
                return null;
            }
            const m = positions.get(preorder[p])!;
            const root = new TreeNode(preorder[p]);
            p++;
            root.left = build(preorder, positions, l, m - 1);
            root.right = build(preorder, positions, m + 1, r);
            return root;
        }

        const n = inorder.length;
        const positions = new Map<number, number>();
        for (let i = 0; i < n; i++) {
            positions.set(inorder[i], i);
        }
        return build(preorder, positions, 0, n - 1)!;
    }
}

class Solution2 {
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let p = 0;
        const n = inorder.length;
        const positions: Map<number, number> = new Map<number, number>();
        for (let i = 0; i < n; i++) {
            positions.set(inorder[i], i);
        }
        function dfs(l: number, r: number): TreeNode {
            if (l > r) return null!;
            const rootVal = preorder[p++];
            const m = positions.get(rootVal)!;
            const root = new TreeNode(rootVal);
            root.left = dfs(l, m - 1);
            root.right = dfs(m + 1, r);
            return root;
        }
        return dfs(0, n - 1);
    }
}
