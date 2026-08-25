import java.util.ArrayList;
import java.util.List;

class Solution {
    class Solution1 {
        public int subsetXORSum(int[] nums) {
            if (nums == null || nums.length == 0) {
                return 0;
            }
            List<Integer> res = new ArrayList<>();
            backtrack(nums, 0, 0, res);
            int total = 0;
            for (int xor : res) {
                total += xor;
            }
            return total;
        }

        private void backtrack(int[] nums, int index, int xor, List<Integer> res) {
            if (index == nums.length) {
                res.add(xor);
                return;
            }
            backtrack(nums, index + 1, xor ^ nums[index], res);
            backtrack(nums, index + 1, xor, res);
        }
    }

    class Solution2 {
        public int subsetXORSum(int[] nums) {

            if (nums == null || nums.length == 0) {
                return 0;
            }

            List<Integer> res = new ArrayList<Integer>();

            backtrack(nums, 0, 0, res);

            int total = 0;
            for (int xor : res) {
                total += xor;
            }
            return total;
        }

        private void backtrack(
                int[] nums,
                int index,
                int xor,
                List<Integer> res) {
            res.add(xor);
            for (int i = index; i < nums.length; i++) {
                backtrack(nums, i + 1, xor ^ nums[i], res);
            }
        }
    }
}