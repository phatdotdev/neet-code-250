class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        boolean[][] graph = new boolean[numCourses][numCourses];
        for (int[] prerequisite : prerequisites) {
            graph[prerequisite[0]][prerequisite[1]] = true;
        }
        boolean[] finished = new boolean[numCourses];
        for (int course = 0; course < numCourses; course++) {
            boolean[] used = new boolean[numCourses];
            if (!finish(course, graph, finished, used)) {
                return false;
            }
        }
        return true;
    }

    private boolean finish(int course, boolean[][] graph, boolean[] finished, boolean[] used) {
        if (finished[course]) {
            return true;
        }
        if (used[course]) {
            return false;
        }
        used[course] = true;
        for (int pre = 0; pre < graph.length; pre++) {
            if (graph[course][pre]) {
                if (!finish(pre, graph, finished, used)) {
                    return false;
                }
            }
        }
        used[course] = false;
        return finished[course] = true;
    }
}