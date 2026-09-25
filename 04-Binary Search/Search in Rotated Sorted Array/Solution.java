class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int c = l + (r - l) / 2;
            if (target == nums[c]) {
                return c;
            }
            if (nums[c] >= nums[l]) {
                if (target >= nums[l] && target < nums[c]) {
                    r = c - 1;
                } else {
                    l = c + 1;
                }
            } else {
                if (target <= nums[r] && target > nums[c]) {
                    l = c + 1;
                } else {
                    r = c - 1;
                }
            }
        }
        return -1;
    }
}
