class Solution {
    public int splitArray(int[] nums, int k) {
        int left = 0;
        int right = 0;
        for (int num : nums) {
            left = Math.max(left, num);
            right += num;
        }
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    private boolean canSplit(int[] nums, int k, int X) {
        int currentSum = 0;
        int groups = 1;
        for (int num : nums) {
            if (currentSum + num > X) {
                currentSum = num;
                groups++;
            } else {
                currentSum += num;
            }
        }
        return groups <= k;
    }
}
