class Solution {
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>();
        for (const num of nums) {
            set.add(num);
        }
        let m = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let curr = num;
                while (set.has(curr)) {
                    curr++;
                }
                m = Math.max(m, curr - num);
            }
        }
        return m;
    }
}
