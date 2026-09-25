class Solution {
    lengthOfLIS(nums: number[]): number {
        const n: number = nums.length;
        const dp: number[] = new Array(n).fill(1);
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[j] > nums[i]) {
                    dp[j] = Math.max(dp[j], dp[i] + 1);
                }
            }
        }
        let maxLen = 0;
        for (const len of dp) {
            maxLen = Math.max(maxLen, len);
        }
        return maxLen;
    }
}
