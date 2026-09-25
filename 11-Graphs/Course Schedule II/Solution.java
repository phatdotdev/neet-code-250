import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] res = new int[numCourses];
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        Deque<Integer> queue = new ArrayDeque<>();
        int[] count = new int[numCourses];
        for (int[] pre : prerequisites) {
            graph.get(pre[1]).add(pre[0]);
            count[pre[0]]++;
        }
        for (int i = 0; i < numCourses; i++) {
            if (count[i] == 0) {
                queue.offer(i);
            }
        }
        int k = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            res[k++] = node;
            for (int next : graph.get(node)) {
                count[next]--;
                if (count[next] == 0) {
                    queue.offer(next);
                }
            }
        }

        return k < numCourses ? new int[] {} : res;
    }
}