class Solution {
    public double myPow(double x, int n) {
        long N = n;
        if (N < 0) {
            x = 1.0 / x;
            N = -N;
        }
        double res = 1.0;
        double P = x;
        while (N > 0) {
            if ((N % 2) == 1) {
                res *= P;
            }
            P *= P;
            N /= 2;
        }
        return res;
    }
}
