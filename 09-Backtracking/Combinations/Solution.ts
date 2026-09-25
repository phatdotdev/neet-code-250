class Solution {
    combine(n: number, k: number): number[][] {
        const res: number[][] = [];
        const curr: number[] = [];
        function backtrack(s: number): void {
            if (curr.length === k) {
                res.push([...curr]);
                return;
            }
            const need = k - curr.length;
            for (let i = s; i <= n - need + 1; i++) {
                curr.push(i);
                backtrack(i + 1);
                curr.pop();
            }
        }
        backtrack(1);
        return res;
    }
}
