import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    class Solution1 {
        public int longestConsecutive(int[] nums) {
            if (nums == null || nums.length == 0)
                return 0;
            Arrays.sort(nums);
            int len = 1;
            int k = 1;
            for (int i = 1; i < nums.length; i++) {
                if (nums[i] == nums[i - 1]) {
                    continue;
                } else if (nums[i] == nums[i - 1] + 1) {
                    k++;
                } else {
                    k = 1;
                }
                len = Math.max(len, k);
            }
            return len;
        }
    }

    class Solution2 {
        public int longestConsecutive(int[] nums) {
            Set<Integer> set = new HashSet<>();
            for (int num : nums) {
                set.add(num);
            }
            int max = 0;
            for (int num : set) {
                int k = 0;
                if (!set.contains(num - 1)) {
                    while (set.contains(num + k)) {
                        k++;
                    }
                    max = Math.max(max, k);
                }
            }
            return max;
        }
    }
}
