class Solution {
    maxSubarraySumCircular(nums: number[]): number {
        let total = 0;
        let max = nums[0],
            currMax = 0;
        let min = nums[0],
            currMin = 0;
        for (const x of nums) {
            currMax = Math.max(currMax + x, x);
            currMin = Math.min(currMin + x, x);

            max = Math.max(currMax, max);
            min = Math.min(currMin, min);

            total += x;
        }
        if (max < 0) {
            return max;
        }
        return Math.max(max, total - min);
    }
}
