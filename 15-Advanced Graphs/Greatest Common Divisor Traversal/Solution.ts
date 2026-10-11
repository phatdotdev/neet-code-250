class UnionFind {
    private parent: number[];
    private components: number;

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, k) => k);
        this.components = n;
    }

    find(u: number): number {
        if (this.parent[u] !== u) {
            this.parent[u] = this.find(this.parent[u]);
        }
        return this.parent[u];
    }

    union(u: number, v: number) {
        const rootU = this.find(u);
        const rootV = this.find(v);
        if (rootU !== rootV) {
            this.parent[rootV!] = rootU;
            this.components--;
        }
    }

    getComponents(): number {
        return this.components;
    }
}

class Solution {
    canTraverseAllPairs(nums: number[]): boolean {
        const n: number = nums.length;
        if (n === 1) return true;

        let maxVal = 0;
        for (const x of nums) {
            if (x === 1) return false;
            maxVal = Math.max(maxVal, x);
        }

        const uf: UnionFind = new UnionFind(n);

        const primeToFirstIndex: Map<number, number> = new Map();
        for (let i = 0; i < n; i++) {
            let x = nums[i];
            for (let d = 2; d * d <= x; d++) {
                if (x % d == 0) {
                    if (primeToFirstIndex.has(d)) {
                        uf.union(i, primeToFirstIndex.get(d)!);
                    } else {
                        primeToFirstIndex.set(d, i);
                    }
                    while (x % d === 0) {
                        x = Math.floor(x / d);
                    }
                }
            }
            if (x > 1) {
                if (primeToFirstIndex.has(x)) {
                    uf.union(i, primeToFirstIndex.get(x)!);
                } else {
                    primeToFirstIndex.set(x, i);
                }
            }
        }

        return uf.getComponents() === 1;
    }
}
