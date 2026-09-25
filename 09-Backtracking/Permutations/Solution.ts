class Solution {
    permute(nums: number[]): number[][] {
        const n = nums.length;
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const nextPermutation = (nums: number[]): boolean => {
            let i = n - 2;
            while (i >= 0 && nums[i] >= nums[i + 1]) i--;
            if (i < 0) return false;
            let j = n - 1;
            while (nums[j] <= nums[i]) j--;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                r--;
            }
            return true;
        };
        res.push([...nums]);
        while (nextPermutation(nums)) {
            res.push([...nums]);
        }
        return res;
    }
}
