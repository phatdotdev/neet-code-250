
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int totalSum = 0;
        int maxKadane = nums[0], currMax = 0;
        int minKadane = nums[0], currMin = 0;
        for (int x : nums) {
            currMax = Math.max(currMax + x, x);
            maxKadane = Math.max(maxKadane, currMax);

            currMin = Math.min(currMin + x, x);
            minKadane = Math.min(minKadane, currMin);

            totalSum += x;
        }
        if (maxKadane < 0) {
            return maxKadane;
        }
        return Math.max(maxKadane, totalSum - minKadane);
    }
}
