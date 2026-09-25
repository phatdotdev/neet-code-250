class Solution {
    class Solution1 {
        public int maxProduct(int[] nums) {
            int n = nums.length;

            int res = Integer.MIN_VALUE;
            int product = 1;

            int[] dp = new int[n];
            for (int i = 0; i < n; i++) {
                dp[i] = product * nums[i];
                product = dp[i] == 0 ? 1 : dp[i];
            }

            int p = -1;
            for (int i = 0; i < n; i++) {
                res = Math.max(res, dp[i]);
                if (dp[i] == 0) {
                    p = -1;
                }
                if (dp[i] < 0) {
                    if (p == -1) {
                        p = i;
                    } else {
                        res = Math.max(res, dp[i] / dp[p]);
                    }
                }
            }

            return res;
        }
    }

    class Solution2 {
        public int maxProduct(int[] nums) {
            int max = nums[0];
            int min = nums[0];
            int res = nums[0];

            for (int num : nums) {
                if (num < 0) {
                    int tmp = max;
                    max = min;
                    min = tmp;
                }
                max = Math.max(num, max * num);
                min = Math.min(num, min * num);
                res = Math.max(res, max);
            }

            return res;
        }

    }
}
