import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Build Graph
        List<int[]>[] graph = new List[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] flight : flights) {
            graph[flight[0]].add(new int[] { flight[1], flight[2] });
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        pq.offer(new int[] { 0, src, 0 });

        int[] minStops = new int[n];
        Arrays.fill(minStops, Integer.MAX_VALUE);

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int cost = curr[0], u = curr[1], stops = curr[2];
            if (u == dst) {
                return cost;
            }

            if (stops > k) {
                continue;
            }
            if (stops >= minStops[u]) {
                continue;
            }
            minStops[u] = stops;

            for (int[] neighbor : graph[u]) {
                int v = neighbor[0];
                int price = neighbor[1];
                pq.offer(new int[] { cost + price, v, stops + 1 });
            }

            stops++;
        }
        return -1;
    }
}
