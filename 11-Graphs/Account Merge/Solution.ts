class Solution1 {
    accountsMerge(accounts: string[][]): string[][] {
        const names: Map<string, string> = new Map();
        const graph: Map<string, string[]> = new Map();
        for (const account of accounts) {
            const name = account[0];
            const firstEmail = account[1];
            for (let i = 1; i < account.length; i++) {
                const email = account[i];
                if (!graph.has(email)) {
                    graph.set(email, []);
                }
                names.set(email, name);
                graph.get(email)?.push(firstEmail);
                graph.get(firstEmail)?.push(email);
            }
        }
        const res: string[][] = [];
        const visited: Set<string> = new Set();
        for (const email of graph.keys()) {
            if (visited.has(email)) {
                continue;
            }
            const emails: string[] = [];
            dfs(email, emails);
            res.sort();
            res.push([names.get(email)!, ...emails]);
        }
        function dfs(email: string, emails: string[]) {
            visited.add(email);
            emails.push(email);

            for (const next of graph.get(email)!) {
                if (visited.has(next)) continue;
                dfs(next, emails);
            }
        }
        return res;
    }
}

class UnionFind {
    parent: number[];
    constructor(size: number) {
        this.parent = Array.from({ length: size }, (_, k) => k);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX != rootY) {
            this.parent[rootY] = rootX;
        }
    }
}

class Solution2 {
    accountsMerge(accounts: string[][]): string[][] {
        const n = accounts.length;
        const uf = new UnionFind(n);
        const emailToAccId = new Map<string, number>();

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            for (let j = 1; j < account.length; j++) {
                const email = account[j];
                if (!emailToAccId.has(email)) {
                    emailToAccId.set(email, i);
                } else {
                    uf.union(i, emailToAccId.get(email)!);
                }
            }
        }

        const idToEmails = new Map<number, string[]>();
        for (const [email, id] of emailToAccId.entries()) {
            const rootId = uf.find(id);
            if (!idToEmails.has(rootId)) {
                idToEmails.set(rootId, []);
            }
            idToEmails.get(rootId)!.push(email);
        }

        const res: string[][] = [];
        for (const [rootId, emails] of idToEmails.entries()) {
            emails.sort();
            const name = accounts[rootId][0];
            res.push([name, ...emails]);
        }

        return res;
    }
}
