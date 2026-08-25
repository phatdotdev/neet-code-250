class Solution {
    class Solution1 {
        public void merge(int[] nums1, int m, int[] nums2, int n) {
            for (int i = 0; i < n; i++) {
                nums1[i + m] = nums2[i];
                int j = i + m;
                while (j > 0 && nums1[j] < nums1[j - 1]) {
                    int tmp = nums1[j];
                    nums1[j] = nums1[j - 1];
                    nums1[j - 1] = tmp;
                    j--;
                }
            }
        }
    }

    class Solution2 {
        public void merge(int[] nums1, int m, int[] nums2, int n) {
            int i = m - 1;
            int j = n - 1;
            int k = m + n - 1;

            while (i >= 0 && j >= 0) {
                if (nums1[i] > nums2[j]) {
                    nums1[k] = nums1[i];
                    i--;
                } else {
                    nums2[k] = nums2[j];
                    j--;
                }
                k--;
            }

            while (k >= 0 && j >= 0) {
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        }
    }
}
