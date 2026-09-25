class Solution {
    jump(nums: number[]): number {
        const n = nums.length;
        const dp: number[] = new Array(n).fill(-1);
        dp[0] = 0;
        for (let i = 0; i < n; i++) {
            if (dp[i] === -1) continue;
            for (let j = i + 1; j <= nums[i] + i && j < n; j++) {
                if (dp[j] === -1 || dp[j] > dp[i] + 1) {
                    dp[j] = dp[i] + 1;
                }
            }
        }
        return dp[n - 1];
    }
}
