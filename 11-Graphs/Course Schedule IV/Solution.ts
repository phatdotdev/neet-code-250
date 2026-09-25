class Solution {
    checkIfPrerequisite(
        numCourses: number,
        prerequisites: number[][],
        queries: number[][],
    ) {
        const graph: boolean[][] = Array.from({ length: numCourses }, () =>
            new Array(numCourses).fill(false),
        );

        for (const [u, v] of prerequisites) {
            graph[u][v] = true;
        }

        for (let k = 0; k < numCourses; k++) {
            for (let i = 0; i < numCourses; i++) {
                for (let j = 0; j < numCourses; j++) {
                    graph[i][j] = graph[i][j] || (graph[i][k] && graph[k][j]);
                }
            }
        }

        const res: boolean[] = [];
        for (const [u, v] of queries) {
            res.push(graph[u][v]);
        }
        return res;
    }
}
