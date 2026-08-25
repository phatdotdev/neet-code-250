class TreeNode {
    val: number = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
}

class Solution {
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const sbRoot: string[] = [];
        const sbSubRoot: string[] = [];

        this.serialize(root, sbRoot);
        this.serialize(subRoot, sbSubRoot);

        return sbRoot.join("").includes(sbSubRoot.join(""));
    }

    private serialize(node: TreeNode | null, sb: string[]): void {
        if(node === null){
            sb.push(",#");
        } else {
         sb.push("," + node.val);
        this.serialize(node.left, sb);
        this.serialize(node.right, sb);
       }
    }
}