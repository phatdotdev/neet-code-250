class Solution {
    public int[] countBits(int n) {
        int[] res = new int[n + 1];
        boolean[] bits = new boolean[32];

        int bitCount = 0;
        res[0] = 0;
        for (int i = 1; i <= n; i++) {
            int j = 0;
            while (j < 32) {
                if (bits[j]) {
                    bitCount--;
                    bits[j] = false;
                } else {
                    bitCount++;
                    bits[j] = true;
                    break;
                }
                j++;
            }
            res[i] = bitCount;
        }

        return res;
    }
}
