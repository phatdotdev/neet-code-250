class Solution {
    partitionLabels(S: string): number[] {
        const n: number = S.length;
        const map: number[] = new Array(26).fill(-1);
        for (let i = n - 1; i >= 0; i--) {
            if (map[S.charCodeAt(i) - 97] === -1) {
                map[S.charCodeAt(i) - 97] = i;
            }
        }
        const res: number[] = [];
        let start = 0;
        let end = 0;
        for (let i = 0; i < n; i++) {
            end = Math.max(end, map[S.charCodeAt(i) - 97]);
            if (end === i) {
                res.push(end - start + 1);
                start = i + 1;
            }
        }
        return res;
    }
}
