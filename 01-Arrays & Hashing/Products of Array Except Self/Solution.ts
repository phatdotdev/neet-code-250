class Solution {
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res: number[] = new Array(n).fill(1);
        let l = 1,
            r = 1;
        for (let i = 0; i < n; i++) {
            res[i] *= l;
            res[n - 1 - i] *= r;
            l *= nums[i];
            r *= nums[n - 1 - i];
        }
        return res;
    }
}
