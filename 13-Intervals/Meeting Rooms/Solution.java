import java.util.List;

class Solution {
    class Interval {
        public int start, end;

        public Interval(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }

    public boolean canAttendMeetings(List<Interval> intervals) {
        intervals.sort((a, b) -> {
            int cmp = Integer.compare(a.start, b.start);
            if (cmp != 0) {
                return cmp;
            }
            return Integer.compare(a.end, b.end);
        });
        for (int i = 1; i < intervals.size(); i++) {
            Interval prev = intervals.get(i - 1);
            Interval curr = intervals.get(i);
            if (curr.start < prev.end) {
                return false;
            }
        }
        return true;
    }
}
