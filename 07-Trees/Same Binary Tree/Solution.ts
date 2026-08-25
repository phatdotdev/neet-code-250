class Solution {
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if(q === null && p === null){
            return true;
        }
        if(q === null || p === null || p.val !== q.val){
            return false;
        }
        return p.val === q.val
                && this.isSameTree(p.left, q.left) 
                && this.isSameTree(p.right, q.right);
    }
}