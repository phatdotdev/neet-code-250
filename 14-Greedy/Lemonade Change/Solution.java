class Solution {
    public boolean lemonadeChange(int[] bills) {
        int[] m = new int[2];
        for (int bill : bills) {
            if (bill == 5) {
                m[0]++;
            } else if (bill == 10) {
                if (m[0] < 1) {
                    return false;
                }
                m[0]--;
                m[1]++;
            } else {
                if (m[1] >= 1 && m[0] >= 1) {
                    m[1]--;
                    m[0]--;
                } else if (m[0] >= 3) {
                    m[0] -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}