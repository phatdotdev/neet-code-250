class Solution {
    subarraySum(nums: number[], k: number): number {
        let count = 0;
        let prefix = 0;

        const freq = new Map<number, number>();
        freq.set(0, 1);

        for (const num of nums) {
            prefix += num;
            const target = prefix - k;
            count += freq.has(target) ? freq.get(target)! : 0;
            freq.set(prefix, (freq.has(prefix) ? freq.get(prefix)! : 0) + 1);
        }

        return count;
    }
}
