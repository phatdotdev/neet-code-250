class Solution {
    findMin(nums: number[]): number {
        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            const c = l + Math.floor((r - l) / 2);
            if (nums[c] > nums[r]) {
                l = c + 1;
            } else {
                r = c;
            }
        }
        return nums[l];
    }
}
