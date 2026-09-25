class Solution {
    rob(nums: number[]): number {
        const n = nums.length;
        if (n === 1) {
            return nums[0];
        }
        function robRange(nums: number[], start: number, end: number): number {
            let rob2 = 0;
            let rob1 = 0;
            for (let i = start; i <= end; i++) {
                let curr = Math.max(rob2 + nums[i], rob1);
                rob2 = rob1;
                rob1 = curr;
            }
            return rob1;
        }
        return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
    }
}
