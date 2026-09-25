class Solution {
    kClosest(points: number[][], k: number): number[][] {
        points.sort(
            (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]),
        );
        const res: number[][] = [];
        for (let i = 0; i < k; i++) {
            res[i] = points[i];
        }
        return res;
    }
}
