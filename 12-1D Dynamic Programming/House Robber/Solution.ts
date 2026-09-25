class Solution {
    rob(nums: number[]): number {
        let rob2 = 0;
        let rob1 = 0;
        for (const num of nums) {
            const rob = Math.max(rob1, rob2 + num);
            rob2 = rob1;
            rob1 = rob;
        }
        return rob1;
    }
}
