class Solution {
    fourSum(nums: number[], target: number): number[][] {
        const n = nums.length;
        const res: number[][] = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            const minSumI = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
            if (minSumI > target) {
                break;
            }
            const maxSumI = nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3];
            if (maxSumI < target) {
                continue;
            }
            for (let j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }
                const minSumJ = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
                if (minSumJ > target) {
                    break;
                }
                const maxSumJ = nums[i] + nums[j] + nums[n - 1] + nums[n - 2];
                if (maxSumJ < target) {
                    continue;
                }
                let l = j + 1,
                    r = n - 1;
                while (l < r) {
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];
                    if (sum === target) {
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        while (nums[l + 1] === nums[l]) l++;
                        while (nums[r - 1] === nums[r]) r--;
                        l++;
                        r--;
                    } else if (sum > target) {
                        r--;
                    } else {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
