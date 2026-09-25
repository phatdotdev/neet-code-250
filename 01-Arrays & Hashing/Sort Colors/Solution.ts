class Solution {
    sortColors(nums: number[]): void {
        function swap(nums: number[], i: number, j: number) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        let l = 0,
            m = 0,
            h = nums.length - 1;

        while (m <= h) {
            if (nums[m] === 0) {
                swap(nums, l++, m++);
            } else if (nums[m] === 1) {
                m++;
            } else {
                swap(nums, m, h--);
            }
        }
    }
}
