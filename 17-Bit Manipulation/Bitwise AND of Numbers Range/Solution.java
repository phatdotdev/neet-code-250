class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        int ans = 0;
        for (int i = 31; i >= 0; i--) {
            int leftBit = left & (1 << i);
            int rightBit = right & (1 << i);
            if (leftBit != rightBit) {
                break;
            }
            if (leftBit != 0) {
                ans |= (1 << i);
            }
        }
        return ans;
    }
}
