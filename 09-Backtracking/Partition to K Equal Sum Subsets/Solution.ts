class Solution {
    canPartitionKSubsets(nums: number[], k: number): boolean {
        const sum = nums.reduce((ac, num) => ac + num);
        if (sum % k !== 0) return false;
        const n = nums.length;
        const target = sum / k;
        const dp: number[] = new Array(1 << n).fill(-1);
        dp[0] = 0;
        for (let mask = 0; mask < 1 << n; mask++) {
            if (dp[mask] === -1) {
                continue;
            }
            for (let i = 0; i < n; i++) {
                if ((mask & (1 << i)) === 0) {
                    if ((dp[mask] % target) + nums[i] <= target) {
                        const newMask = mask | (1 << i);
                        if (dp[newMask] === -1) {
                            dp[newMask] = dp[mask] + nums[i];
                        }
                    }
                }
            }
        }
        return dp[(1 << n) - 1] !== -1;
    }
}
