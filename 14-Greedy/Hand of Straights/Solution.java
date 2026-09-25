import java.util.Arrays;

class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        int n = hand.length;
        if (groupSize == 1) {
            return true;
        }
        if (n % groupSize != 0) {
            return false;
        }
        Arrays.sort(hand);
        int[] count = new int[1001];
        for (int num : hand) {
            count[num]++;
        }
        for (int i = 0; i <= 1000; i++) {
            if (count[i] == 0) {
                continue;
            }
            int size = count[i];
            for (int j = i; j < i + groupSize; j++) {
                if (j > 1000) {
                    return false;
                }
                if (count[j] < size) {
                    return false;
                }
                count[j] -= size;
            }
        }
        return true;
    }
}
