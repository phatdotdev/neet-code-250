import java.util.Arrays;

class Solution {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        int n = nums.length;
        int sum = Arrays.stream(nums).reduce(0, (a, b) -> a + b);
        Arrays.sort(nums);

        if (sum % k != 0) {
            return false;
        }
        int target = sum / k;

        if (nums[n - 1] > target) {
            return false;
        }
        int[] parts = new int[k];

        return backtrack(0, nums, parts, target);
    }

    private boolean backtrack(int i, int[] nums, int[] parts, int target) {
        if (i == nums.length) {
            return true;
        }
        for (int j = 0; j < parts.length; j++) {
            if (parts[j] + nums[i] > target) {
                continue;
            }
            parts[j] += nums[i];
            if (backtrack(i + 1, nums, parts, target)) {
                return true;
            }
            parts[j] -= nums[i];
            if (parts[j] == 0) {
                break;
            }
        }
        return false;
    }
}
