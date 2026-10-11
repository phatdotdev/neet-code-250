class Solution {
    findItinerary(tickets: string[][]): string[] {
        const res: string[] = [];

        tickets.sort((a, b) => b[1].localeCompare(a[1]));
        const graph: Map<string, string[]> = new Map();
        for (const [src, dst] of tickets) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src)!.push(dst);
        }

        function dfs(airport: string) {
            const destinations: string[] = graph.get(airport) || [];
            while (destinations.length > 0) {
                const nextDestination: string = destinations.pop()!;
                dfs(nextDestination);
            }
            res.push(airport);
        }

        dfs("JFK");

        return res.reverse();
    }
}
