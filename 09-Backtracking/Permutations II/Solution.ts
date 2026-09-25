class Solution1 {
    permuteUnique(nums: number[]): number[][] {
        const n = nums.length;
        const res: number[][] = [];
        const curr: number[] = [];
        const added: boolean[] = new Array(n).fill(false);
        nums.sort((a, b) => a - b);
        function backtrack(i: number) {
            if (i === n) {
                res.push([...curr]);
            }
            for (let j = 0; j < n; j++) {
                if (added[j]) {
                    continue;
                }
                if (j > 0 && nums[j] === nums[j - 1] && !added[j - 1]) {
                    continue;
                }
                curr.push(nums[j]);
                added[j] = true;
                backtrack(i + 1);
                curr.pop();
                added[j] = false;
            }
        }
        backtrack(0);
        return res;
    }
}

class Solution2 {
    permuteUnique(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        res.push([...nums]);
        function nextPermutation(nums: number[]): boolean {
            let i = nums.length - 2;
            while (i >= 0 && nums[i] >= nums[i + 1]) i--;
            if (i < 0) {
                return false;
            }
            let j = nums.length - 1;
            while (nums[j] <= nums[i]) j--;
            [nums[i], nums[j]] = [nums[j], nums[i]];

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                r--;
            }
            return true;
        }
        while (nextPermutation(nums)) {
            res.push([...nums]);
        }
        return res;
    }
}
