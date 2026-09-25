class Solution {
    findKthLargest(nums: number[], k: number): number {
        const target = k - 1;
        function find(l: number, r: number): number {
            let i = l;
            const pivot = nums[r];
            for (let j = l; j < r; j++) {
                if (nums[j] >= pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }
            [nums[i], nums[r]] = [nums[r], nums[i]];
            if (i === target) {
                return nums[i];
            } else if (i < target) {
                return find(i + 1, r);
            } else {
                return find(l, i - 1);
            }
        }

        return find(0, nums.length - 1);
    }
}
