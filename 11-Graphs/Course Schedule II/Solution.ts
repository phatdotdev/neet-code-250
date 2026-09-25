class Solution {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const graph: number[][] = Array.from({ length: numCourses }, () => []);
        const indegree: number[] = new Array(numCourses).fill(0);
        for (const prerequisite of prerequisites) {
            graph[prerequisite[1]].push(prerequisite[0]);
            indegree[prerequisite[0]]++;
        }
        let front = 0,
            rear = -1;
        const res: number[] = new Array(numCourses);
        for (let node = 0; node < numCourses; node++) {
            if (indegree[node] === 0) {
                res[++rear] = node;
            }
        }
        while (front <= rear) {
            const node = res[front++];
            for (const next of graph[node]) {
                indegree[next]--;
                if (indegree[next] === 0) {
                    res[++rear] = next;
                }
            }
        }
        return front < numCourses ? [] : res;
    }
}
