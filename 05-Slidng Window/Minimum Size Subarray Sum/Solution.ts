class Solution {
    minSubArrayLen(target: number, nums: number[]): number {
        const n = nums.length;
        let count = n + 1;
        let sum = 0;
        let l = 0;
        for (let r = 0; r < n; r++) {
            sum += nums[r];
            while (sum >= target) {
                count = Math.min(count, r - l + 1);
                sum -= nums[l++];
            }
        }
        return count === n + 1 ? 0 : count;
    }
}
