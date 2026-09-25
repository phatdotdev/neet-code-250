class Interval {
    start: number;
    end: number;
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}

class Solution {
    minMeetingRooms(intervals: Interval[]): number {
        const start: number[] = [];
        const end: number[] = [];
        for (const interval of intervals) {
            start.push(interval.start);
            end.push(interval.end);
        }
        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);
        const n = intervals.length;
        let i = 0;
        let j = 0;
        let rooms = 0;
        let maxRooms = 0;
        while (i < n) {
            if (start[i] < end[j]) {
                rooms++;
                maxRooms = Math.max(maxRooms, rooms);
                i++;
            } else {
                rooms--;
                j++;
            }
        }
        return maxRooms;
    }
}
