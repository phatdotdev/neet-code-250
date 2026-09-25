class Solution {
    canPartition(nums: number[]): boolean {
        const total = nums.reduce((prev, curr) => prev + curr);
        if (total % 2 !== 0) {
            return false;
        }
        const target = total / 2;
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;
        for (const num of nums) {
            for (let i = target; i >= num; i--) {
                if (dp[i - num]) {
                    dp[i] = true;
                }
            }
        }
        return dp[target];
    }
}
