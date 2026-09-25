import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int[] getOrder(int[][] tasks) {
        int n = tasks.length;
        int[][] extTasks = new int[n][3];
        for (int i = 0; i < n; i++) {
            extTasks[i][0] = tasks[i][0];
            extTasks[i][1] = tasks[i][1];
            extTasks[i][2] = i;
        }
        Arrays.sort(extTasks, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            }
            return Integer.compare(a[2], b[2]);
        });
        int[] res = new int[n];
        int resIndex = 0;
        int taskIndex = 0;
        long currentTime = 0;
        while (resIndex < n) {
            if (pq.isEmpty() && currentTime < extTasks[taskIndex][0]) {
                currentTime = extTasks[taskIndex][0];
            }
            while (taskIndex < n && extTasks[taskIndex][0] <= currentTime) {
                pq.offer(extTasks[taskIndex]);
                taskIndex++;
            }
            int[] currTask = pq.poll();
            res[resIndex++] = currTask[2];
            currentTime += currTask[1];
        }
        return res;
    }
}
