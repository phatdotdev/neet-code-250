import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

class Solution {
    public int[][] buildMatrix(int k, int[][] rowConditions, int[][] colConditions) {
        Map<Integer, Integer> cols = topoSort(k, colConditions);
        Map<Integer, Integer> rows = topoSort(k, rowConditions);
        if (cols.size() < k || rows.size() < k) {
            return new int[][] {};
        }
        int[][] res = new int[k][k];
        for (int u = 0; u < k; u++) {
            res[rows.get(u)][cols.get(u)] = u + 1;
        }
        return res;
    }

    private Map<Integer, Integer> topoSort(int k, int[][] conditions) {
        Map<Integer, Integer> res = new HashMap<>();
        List<Integer>[] graph = new List[k];
        int[] indegree = new int[k];
        for (int i = 0; i < k; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] condition : conditions) {
            int u = condition[0] - 1;
            int v = condition[1] - 1;
            graph[u].add(v);
            indegree[v]++;
        }
        Queue<Integer> queue = new LinkedList<>();
        for (int u = 0; u < k; u++) {
            if (indegree[u] == 0) {
                queue.offer(u);
            }
        }
        int i = 0;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            for (int v : graph[u]) {
                indegree[v]--;
                if (indegree[v] == 0) {
                    queue.offer(v);
                }
            }
            res.put(u, i);
            i++;
        }
        return res;
    }
}