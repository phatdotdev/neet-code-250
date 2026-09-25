class Solution {
    search(nums: number[], target: number): number {
        let l = 0,
            r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] === target) {
                return m;
            }
            if (nums[m] >= nums[l]) {
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target <= nums[r] && target > nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
