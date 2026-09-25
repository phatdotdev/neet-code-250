class Solution {
    calcEquation(equations: string[][], values: number[], queries: string[][]) {
        const graph: Map<string, Map<string, number>> = new Map<
            string,
            Map<string, number>
        >();
        const m = equations.length;
        for (let i = 0; i < m; i++) {
            const u = equations[i][0];
            const v = equations[i][1];
            const val = values[i];
            if (!graph.has(u)) {
                graph.set(u, new Map<string, number>());
            }
            if (!graph.has(v)) {
                graph.set(v, new Map<string, number>());
            }
            graph.get(u)?.set(v, val);
            graph.get(v)?.set(u, 1 / val);
        }

        const n = queries.length;
        const res: number[] = new Array(n);
        for (let i = 0; i < n; i++) {
            const start = queries[i][0];
            const end = queries[i][1];
            if (!graph.has(start) || !graph.has(end)) {
                res[i] = -1.0;
                continue;
            }
            const visited: Set<string> = new Set<string>();
            res[i] = dfs(start, end, 1.0, visited);
        }
        function dfs(
            curr: string,
            target: string,
            value: number,
            visited: Set<string>,
        ): number {
            if (curr === target) {
                return value;
            }
            visited.add(curr);
            for (const [key, val] of graph.get(curr)!.entries()) {
                if (visited.has(key)) continue;
                const ans = dfs(key, target, value * val, visited);
                if (ans !== -1) {
                    return ans;
                }
            }
            return -1;
        }
        return res;
    }
}
