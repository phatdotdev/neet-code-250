class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(
        val: number = 0,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Codec {
    serialize(root: TreeNode | null): string {
        const res: string[] = [];
        const queue: (TreeNode | null)[] = [];

        let i = 0;
        queue.push(root);

        while (i < queue.length) {
            const current: TreeNode | null = queue[i];
            if (current !== null) {
                queue.push(current.left);
                queue.push(current.right);
            }
            res.push((current !== null ? current.val : ".") + "#");
            i++;
        }
        return res.join("");
    }

    deserialize(data: string): TreeNode {
        if (data === null || data.length === 0) {
            return null!;
        }
        const strs: string[] = data.split("#");
        if (strs[0] === ".") {
            return null!;
        }

        const root: TreeNode = new TreeNode(parseInt(strs[0]));
        const queue: (TreeNode | null)[] = [root];

        let i = 0;
        let j = 1;

        while (i < queue.length && i < strs.length) {
            const current = queue[i++]!;
            if (strs[j] !== "." && strs[j] !== "") {
                current.left = new TreeNode(parseInt(strs[j]));
                queue.push(current.left);
            }
            j++;
            if (j < strs.length && strs[j] !== "." && strs[j] !== "") {
                current.right = new TreeNode(parseInt(strs[j]));
                queue.push(current.right);
            }
            j++;
        }

        return root;
    }
}
