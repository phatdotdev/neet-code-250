class Solution {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const graph: number[][] = Array.from({ length: numCourses }, () => []);
        for (const pre of prerequisites) {
            graph[pre[1]].push(pre[0]);
        }
        const visited = new Array(numCourses).fill(0);
        function hasCycle(node: number) {
            if (visited[node] === 1) return true;
            if (visited[node] === 2) return false;
            visited[node] = 1;
            for (const neighbor of graph[node]) {
                if (hasCycle(neighbor)) {
                    return true;
                }
            }
            visited[node] = 2;
            return false;
        }
        for (let i = 0; i < numCourses; i++) {
            if (visited[i] === 0) {
                if (hasCycle(i)) {
                    return false;
                }
            }
        }
        return true;
    }
}
