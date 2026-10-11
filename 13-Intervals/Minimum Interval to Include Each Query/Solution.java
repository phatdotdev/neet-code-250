import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        int m = queries.length;

        int[][] sortedQueries = new int[m][2];
        for (int i = 0; i < m; i++) {
            sortedQueries[i][0] = queries[i];
            sortedQueries[i][1] = i;
        }
        Arrays.sort(sortedQueries, (a, b) -> Integer.compare(a[0], b[0]));

        int[] output = new int[m];
        Arrays.fill(output, -1);

        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
                (a, b) -> Integer.compare(a[0], b[0]));

        int i = 0;
        int n = intervals.length;

        for (int[] query : sortedQueries) {
            while (i < n && intervals[i][0] <= query[0]) {
                int start = intervals[i][0];
                int end = intervals[i][1];
                int duration = end - start + 1;
                minHeap.offer(new int[] { duration, end });
                i++;
            }

            while (!minHeap.isEmpty() && minHeap.peek()[1] < query[0]) {
                minHeap.poll();
            }

            if (!minHeap.isEmpty()) {
                output[query[1]] = minHeap.peek()[0];
            }
        }

        return output;
    }
}
