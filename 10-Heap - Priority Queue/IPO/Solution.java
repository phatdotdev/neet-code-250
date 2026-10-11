import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        int[][] projects = new int[n][2];
        for (int i = 0; i < n; i++) {
            projects[i][0] = capital[i];
            projects[i][1] = profits[i];
        }

        Arrays.sort(projects, (a, b) -> a[0] - b[0]);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        int totalCapital = w;
        int j = 0;
        for (int i = 0; i < k; i++) {
            while (j < n && totalCapital >= projects[j][0]) {
                pq.offer(projects[j]);
                j++;
            }
            if (!pq.isEmpty()) {
                int[] project = pq.poll();
                totalCapital += project[1];
            }
        }

        return totalCapital;
    }
}