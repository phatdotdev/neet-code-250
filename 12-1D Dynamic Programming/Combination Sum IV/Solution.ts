class Solution {
    combinationSum4(nums: number[], target: number): number {
        const dp: number[] = new Array(target + 1).fill(0);
        dp[0] = 1;
        for (let i = 0; i < target; i++) {
            if (dp[i] === 0) {
                continue;
            }
            for (const num of nums) {
                if (i + num > target) {
                    continue;
                }
                dp[i + num] += dp[i];
            }
        }
        return dp[target];
    }
}
