class Solution {
    class Solution1 {
        public void sortColors(int[] nums) {
            int l = 0;
            int r = nums.length - 1;
            while (l < r) {
                while (l < r && nums[r] == 2) {
                    r--;
                }
                while (l < r && nums[l] < 2) {
                    l++;
                }
                if (l < r) {
                    swap(nums, l, r);
                }
            }
            r = l;
            l = 0;
            while (l < r) {
                while (l < r && nums[r] == 1) {
                    r--;
                }
                while (l < r && nums[l] < 1) {
                    l++;
                }
                if (l < r) {
                    swap(nums, l, r);
                }
            }
        }

    }

    class Solution2 {
        public void sortColors(int[] nums) {
            int l = 0;
            int m = 0;
            int r = nums.length - 1;
            while (m <= r) {
                if (nums[m] == 0) {
                    swap(nums, l++, m++);
                } else if (nums[m] == 1) {
                    m++;
                } else {
                    swap(nums, m, r--);
                }
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
}