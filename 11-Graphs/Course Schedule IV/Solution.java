import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    class Solution1 {
        public List<Boolean> checkIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {
            List<Set<Integer>> graph = new ArrayList<>();
            for (int i = 0; i < numCourses; i++) {
                graph.add(new HashSet<>());
            }
            for (int[] prerequisite : prerequisites) {
                graph.get(prerequisite[0]).add(prerequisite[1]);
            }
            List<Boolean> res = new ArrayList<>();
            for (int[] query : queries) {
                res.add(require(query[0], query[1], graph));
            }
            return res;
        }

        private boolean require(int u, int v, List<Set<Integer>> graph) {
            if (graph.get(u).contains(v)) {
                return true;
            }
            for (int neighbor : graph.get(u)) {
                if (require(neighbor, v, graph)) {
                    return true;
                }
            }
            return false;
        }
    }

    class Solution2 {
        public List<Boolean> checkIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {
            boolean[][] reachable = new boolean[numCourses][numCourses];
            for (int[] prerequisite : prerequisites) {
                reachable[prerequisite[0]][prerequisite[1]] = true;
            }
            for (int k = 0; k < numCourses; k++) {
                for (int i = 0; i < numCourses; i++) {
                    for (int j = 0; j < numCourses; j++) {
                        reachable[i][j] |= reachable[i][k] && reachable[k][j];
                    }
                }
            }
            List<Boolean> res = new ArrayList<>();
            for (int[] query : queries) {
                res.add(reachable[query[0]][query[1]]);
            }
            return res;
        }
    }
}
