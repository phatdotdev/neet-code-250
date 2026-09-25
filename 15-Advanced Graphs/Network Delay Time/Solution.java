import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        int[] minTime = new int[n + 1];
        Arrays.fill(minTime, Integer.MAX_VALUE);
        boolean[] visited = new boolean[n + 1];

        List<int[]>[] graph = new List[n + 1];
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] time : times) {
            graph[time[0]].add(new int[] { time[1], time[2] });
        }

        minTime[k] = 0;
        for (int step = 0; step < n; step++) {
            int u = -1;
            int time = Integer.MAX_VALUE;
            for (int i = 1; i <= n; i++) {
                if (!visited[i] && minTime[i] < time) {
                    u = i;
                    time = minTime[i];
                }
            }
            if (u == -1) {
                break;
            }
            visited[u] = true;
            for (int[] neighbor : graph[u]) {
                int v = neighbor[0];
                int cost = neighbor[1];
                if (!visited[v] && minTime[v] > minTime[u] + cost) {
                    minTime[v] = minTime[u] + cost;
                }
            }
        }

        int maxDelay = 0;
        for (int i = 1; i <= n; i++) {
            if (minTime[i] == Integer.MAX_VALUE)
                return -1;
            maxDelay = Math.max(maxDelay, minTime[i]);
        }

        return maxDelay;
    }
}
