import java.util.List;
import java.util.PriorityQueue;

class Solution {
    class Interval {
        public int start, end;

        public Interval(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }

    public int minMeetingRooms(List<Interval> intervals) {
        intervals.sort((a, b) -> a.start - b.start);
        PriorityQueue<Interval> pq = new PriorityQueue<>((a, b) -> a.end - b.end);
        int n = intervals.size();
        int i = 0;
        int len = 0;
        while (i < n) {
            Interval interval = intervals.get(i);
            while (!pq.isEmpty() && pq.peek().end <= interval.start) {
                pq.poll();
            }
            pq.offer(interval);
            len = Math.max(len, pq.size());
            i++;
        }
        return len;
    }
}