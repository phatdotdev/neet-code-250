class Solution {
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];
        this.backtrack(nums, 0, [], res);
        return res;
    }

    private backtrack(nums: number[], index: number, curr: number[], res: number[][]): void {
        if (index === nums.length) {
            res.push([...curr]);
            return;
        }
        curr.push(nums[index]);
        this.backtrack(nums, index + 1, curr, res);
        curr.pop();

        this.backtrack(nums, index + 1, curr, res);

    }
}