class Solution {
    combinationSum2(candidates: number[], target: number): number[][] {
        const n = candidates.length;
        candidates.sort((a, b) => a - b);
        const res: number[][] = [];
        const curr: number[] = [];
        const backtrack = (i: number, remain: number) => {
            if (remain === 0) {
                res.push([...curr]);
            }
            if (i === n) {
                return;
            }
            for (let j = i; j < n; j++) {
                if (candidates[j] > remain) {
                    break;
                }
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }
                curr.push(candidates[j]);
                backtrack(j + 1, remain - candidates[j]);
                curr.pop();
            }
        };
        backtrack(0, target);
        return res;
    }
}
