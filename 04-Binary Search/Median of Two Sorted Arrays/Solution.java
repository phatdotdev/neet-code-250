class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        int m = nums1.length;
        int n = nums2.length;
        int low = 0;
        int high = m;
        while (low <= high) {
            int i = low + (high - low) / 2;
            int j = ((m + n + 1) / 2) - i;

            int AL = i > 0 ? nums1[i - 1] : Integer.MIN_VALUE;
            int AR = i < m ? nums1[i] : Integer.MAX_VALUE;
            int BL = j > 0 ? nums2[j - 1] : Integer.MIN_VALUE;
            int BR = j < n ? nums2[j] : Integer.MAX_VALUE;
            if (AL <= BR && BL <= AR) {
                if ((m + n) % 2 == 0) {
                    return 1.0 * (Math.max(AL, BL) + Math.min(AR, BR)) / 2;
                } else {
                    return Math.max(AL, BL);
                }
            } else if (AL > BR) {
                high = i - 1;
            } else {
                low = i + 1;
            }
        }

        return 0.0;
    }
}