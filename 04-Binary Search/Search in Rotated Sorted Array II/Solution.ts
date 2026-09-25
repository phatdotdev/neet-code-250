class Solution {
    search(nums: number[], target: number): boolean {
        function searchRange(
            nums: number[],
            target: number,
            l: number,
            r: number,
        ): boolean {
            while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                if (nums[m] === target) {
                    return true;
                }
                if (nums[l] === nums[m] && nums[m] === nums[r]) {
                    return (
                        searchRange(nums, target, l + 1, m - 1) ||
                        searchRange(nums, target, m + 1, r - 1)
                    );
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
            return false;
        }
        return searchRange(nums, target, 0, nums.length - 1);
    }
}

class Solution2 {
    search(nums: number[], target: number) {
        let l = 0,
            r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] === target) {
                return true;
            }
            if (nums[m] === nums[l] && nums[m] === nums[r]) {
                l++;
                r--;
                continue;
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
        return false;
    }
}
