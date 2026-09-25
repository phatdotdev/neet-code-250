class Solution {
    class Solution1 {
        public boolean canJump(int[] nums) {
            int n = nums.length;
            boolean[] dp = new boolean[n];
            dp[0] = true;
            for (int i = 0; i < n; i++) {
                if (dp[i]) {
                    for (int j = i + 1; j < n && j <= i + nums[i]; j++) {
                        dp[j] = true;
                    }
                }
            }
            return dp[n - 1];
        }
    }

    class Solution2 {
        public boolean canJump(int[] nums) {
            int maxReach = 0;
            for (int i = 0; i < nums.length; i++) {
                if (i > maxReach)
                    return false;
                maxReach = Math.max(maxReach, i + nums[i]);
            }
            return true;
        }
    }
}
