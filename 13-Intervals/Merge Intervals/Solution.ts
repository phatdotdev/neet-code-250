class Solution {
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const res: number[][] = [];

        let curr: number[] = intervals[0];
        for (let i = 0; i < intervals.length; i++) {
            const next: number[] = intervals[i];
            if (next[0] <= curr[1]) {
                curr[1] = Math.max(curr[1], next[1]);
            } else {
                res.push(curr);
                curr = next;
            }
        }
        res.push(curr);
        return res;
    }
}
