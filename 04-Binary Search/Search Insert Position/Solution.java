class Solution {
    class Solution1 {
        public int searchInsert(int[] nums, int target) {
            if (target <= nums[0])
                return 0;
            if (target > nums[nums.length - 1]) {
                return nums.length;
            }
            int l = 1, r = nums.length - 1;
            while (l <= r) {
                int m = (r + l) / 2;
                if (nums[m] >= target && nums[m - 1] < target) {
                    return m;
                } else if (nums[m] < target) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
            return -1;
        }
    }

    class Solution2 {
        public int searchInsert(int[] nums, int target) {
            int l = 0, r = nums.length;
            while (l < r) {
                int m = l + (r - l) / 2;
                if (nums[m] < target) {
                    l = m + 1;
                } else {
                    r = m;
                }
            }
            return l;
        }
    }
}
