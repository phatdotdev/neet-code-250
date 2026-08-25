import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        backtrack(0, nums, target, new ArrayList<Integer>(), res);
        return res;
    }

    private void backtrack(int index, int[] nums, int remain, List<Integer> curr, List<List<Integer>> res) {
        if (remain == 0) {
            res.add(new ArrayList<Integer>(curr));
            return;
        }
        for (int i = index; i < nums.length; i++) {
            if (nums[i] > remain)
                break;
            curr.add(nums[i]);
            backtrack(i, nums, remain - nums[i], curr, res);
            curr.remove(curr.size() - 1);
        }
    }
}
