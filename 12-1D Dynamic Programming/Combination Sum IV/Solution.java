import java.util.Arrays;

class Solution {
    public int combinationSum4(int[] nums, int target) {
        Arrays.sort(nums);

        int[] dp = new int[target + 1];
        Arrays.fill(dp, 0);
        dp[0] = 1;
        for (int i = 0; i < target; i++) {
            if (dp[i] != 0) {
                for (int num : nums) {
                    if (i + num > target) {
                        break;
                    }
                    dp[i + num] += dp[i];
                }
            }
        }
        return dp[target];
    }
}
