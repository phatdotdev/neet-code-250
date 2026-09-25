class Solution {
    findTargetSumWays(nums: number[], target: number): number {
        const n = nums.length;
        const m = 1 << n;

        let total = 0;
        for (const num of nums) {
            total += num;
        }

        const dp: number[] = new Array(m).fill(-1);
        dp[0] = -total;

        let count = 0;
        for (let mask = 0; mask < m; mask++) {
            if (dp[mask] === target) {
                count++;
            }
            for (let j = 0; j < n; j++) {
                const nextMask = mask | (1 << j);
                dp[nextMask] = dp[mask] + 2 * nums[j];
            }
        }

        return count;
    }
}

class Solution2 {
    findTargetSumWays(nums: number[], target: number): number {
        let total = 0;
        for (const num of nums) {
            total += num;
        }

        if (Math.abs(target) > total) {
            return 0;
        }

        let dp: number[] = new Array(total * 2 + 1).fill(0);
        dp[total] = 1;
        for (const num of nums) {
            const next = new Array(total * 2 + 1).fill(0);
            for (let sum = -total; sum <= total; sum++) {
                const count = dp[sum + total];
                if (count === 0) {
                    continue;
                }
                next[sum + total + num] += count;
                next[sum + total - num] += count;
            }
            dp = next;
        }
        return dp[target + total];
    }
}
