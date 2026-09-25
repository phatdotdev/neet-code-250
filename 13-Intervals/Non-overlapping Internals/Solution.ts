class Solution {
    eraseOverlapIntervals(intervals: number[][]): number {
        let count = 0;
        intervals.sort((a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]));
        const n = intervals.length;
        let prevEnd = intervals[0][1];
        for (let i = 1; i < n; i++) {
            if (intervals[i][0] < prevEnd) {
                count++;
                prevEnd = Math.min(prevEnd, intervals[i][1]);
            } else {
                prevEnd = intervals[i][1];
            }
        }

        return count;
    }
}
