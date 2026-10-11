class Solution {
    splitArray(nums: number[], k: number): number {
        function canSplit(nums: number[], k: number, t: number) {
            let groups = 1;
            let currentSum = 0;
            for (const num of nums) {
                if (currentSum + num > t) {
                    currentSum = num;
                    groups++;
                } else {
                    currentSum += num;
                }
            }
            return groups <= k;
        }

        let left = 0;
        let right = 0;
        for (const num of nums) {
            left = Math.max(left, num);
            right += num;
        }

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
