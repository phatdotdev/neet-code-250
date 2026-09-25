class Solution {
    myPow(x: number, n: number): number {
        if (n === 0) return 1;
        let N = n;
        if (N < 0) {
            x = 1.0 / x;
            N = -N;
        }
        let product = x;
        let res = 1.0;
        while (N > 0) {
            if (N % 2 !== 0) {
                res *= product;
            }
            product *= product;
            N = Math.floor(n / 2);
        }
        return res;
    }
}
