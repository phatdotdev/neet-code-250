import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    class Solution1 {
        public int findTargetSumWays(int[] nums, int target) {
            int n = nums.length;

            int total = 0;
            for (int num : nums) {
                total += num;
            }

            int m = 1 << n;

            int[] dp = new int[m];
            Arrays.fill(dp, -1);
            dp[0] = -total;

            int count = 0;
            for (int i = 0; i < m; i++) {
                if (dp[i] == target) {
                    count++;
                }
                for (int j = 0; j < n; j++) {
                    if ((i & (1 << j)) != 0) {
                        continue;
                    }
                    int mask = i | (1 << j);
                    dp[mask] = dp[i] + 2 * nums[j];
                }
            }
            return count;
        }
    }

    class Solution2 {
        public int findTargetSumWays(int[] nums, int target) {
            Map<Integer, Integer> dp = new HashMap<>();
            dp.put(0, 1);
            for (int num : nums) {
                Map<Integer, Integer> next = new HashMap<>();
                for (Map.Entry<Integer, Integer> entry : dp.entrySet()) {
                    int sum = entry.getKey();
                    int count = entry.getValue();

                    next.merge(sum + num, count, Integer::sum);
                    next.merge(sum - num, count, Integer::sum);
                }
                dp = next;
            }
            return dp.getOrDefault(target, 0);
        }
    }
}
