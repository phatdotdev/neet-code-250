import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        int n = trips.length;
        int remain = capacity;
        Arrays.sort(trips, (a, b) -> Integer.compare(a[1], b[1]));
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[2], b[2]));
        for (int i = 0; i < n; i++) {
            int[] trip = trips[i];
            while (!pq.isEmpty() && pq.peek()[2] <= trip[1]) {
                remain += pq.poll()[0];
            }
            if (remain < trip[0]) {
                return false;
            }
            remain -= trip[0];
            pq.offer(trip);
        }
        return true;
    }
}