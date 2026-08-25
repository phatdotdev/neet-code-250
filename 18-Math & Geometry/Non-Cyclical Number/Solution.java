import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        while (n != 1) {
            if (set.contains(n)) {
                return false;
            }
            set.add(n);
            n = getNext(n);
        }
        return true;
    }

    private int getNext(int n) {
        int res = 0;
        while (n != 0) {
            int r = n % 10;
            res += r * r;
            n /= 10;
        }
        return res;
    }
}
