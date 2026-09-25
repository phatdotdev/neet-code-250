class Solution {
    uniquePaths(m: number, n: number): number {
        const arr: number[] = Array(m).fill(1);
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                arr[j] += arr[j - 1];
            }
        }
        return arr[m - 1];
    }
}
