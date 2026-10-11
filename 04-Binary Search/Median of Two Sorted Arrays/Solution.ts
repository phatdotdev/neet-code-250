class Solution {
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }
        const m = nums1.length;
        const n = nums2.length;
        let low = 0;
        let high = m;
        let half = Math.floor((m + n + 1) / 2);
        while (low <= high) {
            let i = low + Math.floor((high - low) / 2);
            let j = half - i;
            const AL = i > 0 ? nums1[i - 1] : -Infinity;
            const AR = i < m ? nums1[i] : Infinity;
            const BL = j > 0 ? nums2[j - 1] : -Infinity;
            const BR = j < n ? nums2[j] : Infinity;

            if (AL <= BR && BL <= AR) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(AL, BL) + Math.min(AR, BR)) / 2;
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
