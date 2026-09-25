import java.util.HashMap;
import java.util.Map;

class Solution {
    class Solution1 {
        public int[] twoSum(int[] numbers, int target) {
            Map<Integer, Integer> map = new HashMap<>();
            for (int i = 0; i < numbers.length; i++) {
                int c = target - numbers[i];
                if (map.containsKey(c)) {
                    return new int[] { map.get(c) + 1, i + 1 };
                }
                map.put(numbers[i], i);
            }
            return new int[] {};
        }
    }

    class Solution2 {
        public int[] twoSum(int[] nums, int target) {
            int l = 0, r = nums.length - 1;
            while (l < r) {
                int sum = nums[l] + nums[r];
                if (sum == 0) {
                    return new int[] { l, r };
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
            return new int[] {};
        }
    }
}