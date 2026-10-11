import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int mostBooked(int n, int[][] meetings) {
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));

        int[] count = new int[n];

        PriorityQueue<Integer> unusedRooms = new PriorityQueue<>();
        for (int i = 0; i < n; i++) {
            unusedRooms.offer(i);
        }

        PriorityQueue<long[]> usedRooms = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0])
                return Long.compare(a[0], b[0]);
            return Long.compare(a[1], b[1]);
        });

        for (int[] meeting : meetings) {
            long start = meeting[0];
            long end = meeting[1];
            long duration = end - start;

            while (!usedRooms.isEmpty() && usedRooms.peek()[0] < start) {
                unusedRooms.offer((int) usedRooms.poll()[1]);
            }

            if (!unusedRooms.isEmpty()) {
                int room = unusedRooms.poll();
                count[room]++;
                usedRooms.offer(new long[] { end, room });
            } else {
                long[] earliestRoom = usedRooms.poll();
                long roomEndTime = earliestRoom[0];
                int room = (int) earliestRoom[1];
                count[room]++;
                usedRooms.offer(new long[] { roomEndTime + duration, room });
            }

        }

        int maxIndex = 0;
        for (int i = 0; i < n; i++) {
            if (count[maxIndex] < count[i]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}
