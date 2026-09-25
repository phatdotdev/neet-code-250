
class Solution {
    public long minEnd(int n, int x) {
        long ans = x;
        int k = n - 1;
        for (int bit = 0; k > 0; bit++) {
            if ((x & (1L << bit)) == 0) {
                if ((k & 1L) != 0) {
                    ans |= (1L << bit);
                }
                k >>= 1;
            }
        }
        return ans;
    }
}