class Solution {
    maxProduct(nums: number[]): number {
        let max = nums[0];
        let min = nums[0];
        let res = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];
            if (num < 0) {
                const temp = max;
                max = min;
                min = temp;
            }

            max = Math.max(num, max * num);
            min = Math.min(num, min * num);

            res = Math.max(res, max);
        }

        return res;
    }
}
