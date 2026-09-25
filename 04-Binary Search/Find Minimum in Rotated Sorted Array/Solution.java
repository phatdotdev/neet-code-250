class Solution {
    public int findMin(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int c = l + (r - l) / 2;
            if (nums[c] > nums[r]) {
                l = c + 1;
            } else {
                r = c;
            }
        }
        return nums[l];
    }
}
