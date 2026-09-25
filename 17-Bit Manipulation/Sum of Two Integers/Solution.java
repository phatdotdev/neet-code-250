class Solution {
    public int getSum(int a, int b) {
        int ans = 0;
        int shift = 0;
        int carry = 0;
        while (shift < 32) {
            int bitA = a & 1;
            int bitB = b & 1;

            int sum = bitA ^ bitB ^ carry;
            carry = (bitA & bitB) | (bitA & carry) | (bitB & carry);

            if (sum != 0) {
                ans |= (1 << shift);
            }

            shift++;
            a >>>= 1;
            b >>>= 1;
        }

        return ans;
    }
}
