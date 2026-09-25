import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        res.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
        while (nextPermutation(nums)) {
            res.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
        }
        return res;
    }

    private boolean nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i < 0) {
            return false;
        }
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = nums.length - 1;

        int left = i + 1;
        int right = j - 1;
        while (left < right) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
        return true;
    }
}
