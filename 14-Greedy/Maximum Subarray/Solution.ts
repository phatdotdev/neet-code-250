class Solution {
    maxSubArray(nums: number[]): number {
        const n = nums.length;
        let maxSum = nums[0];
        let currSum = nums[0];
        for (let i = 1; i < n; i++) {
            currSum = Math.max(currSum + nums[i], nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
}
