class Solution {
    findCheapestPrice(
        n: number,
        flights: number[][],
        src: number,
        dst: number,
        k: number,
    ) {
        const graph: number[][][] = Array.from({ length: n }, () => []);
        for (const [u, v, price] of flights) {
            graph[u].push([v, price]);
        }
        const minCost: number[] = new Array(n).fill(Infinity);
        minCost[src] = 0;

        const queue: number[][] = [];
        queue.push([src, 0]);
        let stops = 0;

        let i = 0;
        while (i < queue.length && stops <= k) {
            const size = queue.length;
            for (; i < size; i++) {
                const [u, cost] = queue[i];
                for (const [v, price] of graph[u]) {
                    if (cost + price < minCost[v]) {
                        minCost[v] = cost + price;
                        queue.push([v, minCost[v]]);
                    }
                }
            }
            stops++;
        }

        return minCost[dst] === Infinity ? -1 : minCost[dst];
    }
}

class Solution2 {
    findCheapestPrice(
        n: number,
        flights: number[][],
        src: number,
        dst: number,
        k: number,
    ) {
        let minCost: number[] = new Array(n).fill(Infinity);
        minCost[src] = 0;
        while (k-- >= 0) {
            const temp: number[] = [...minCost];
            for (const [u, v, cost] of flights) {
                if (minCost[u] === Infinity) {
                    continue;
                }
                temp[v] = Math.min(temp[v], minCost[u] + cost);
            }
            minCost = temp;
        }
        return minCost[dst] === Infinity ? -1 : minCost[dst];
    }
}
