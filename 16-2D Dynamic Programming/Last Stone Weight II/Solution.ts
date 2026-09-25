class Solution {
    lastStoneWeightII(stones: number[]): number {
        const n = stones.length;

        let total: number = 0;
        for (const stone of stones) {
            total += stone;
        }
        const target = Math.floor(total / 2);

        const dp: boolean[] = new Array(n + 1).fill(false);
        dp[0] = true;

        let maxWeight = 0;
        for (const stone of stones) {
            for (let i = target; i >= stone; i--) {
                if (dp[i - stone]) {
                    dp[i] = true;
                    maxWeight = Math.max(maxWeight, i);
                }
            }
        }
        return total - maxWeight * 2;
    }
}
