class Solution {
    subsetsWithDup(nums: number[]): number[][] {
        const n = nums.length;
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const curr: number[] = [];
        function subsets(i: number): void {
            if (i === n) {
                res.push([...curr]);
                return;
            }
            curr.push(nums[i]);
            subsets(i + 1);
            curr.pop();
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            subsets(i + 1);
        }
        subsets(0);
        return res;
    }
}
