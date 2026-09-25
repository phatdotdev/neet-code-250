class Solution {
    class Solution1 {
        public int reverse(int x) {
            int res = 0;
            while (x != 0) {
                if (res > Integer.MAX_VALUE / 10 || res < Integer.MIN_VALUE / 10) {
                    return 0;
                }
                int r = x % 10;
                if (res == Integer.MAX_VALUE && r > 7) {
                    return 0;
                }
                if (res == Integer.MIN_VALUE && r < -8) {
                    return 0;
                }
                res = res * 10 + r;
                x /= 10;
            }
            return res;
        }
    }

    class Solution2 {
        public int reverse(int x) {
            int ans = 0;
            while (x != 0) {
                int mod = x % 10;
                if ((ans > Integer.MAX_VALUE / 10) || (ans == Integer.MAX_VALUE / 10 && mod > 7)) {
                    return 0;
                }
                if ((ans < Integer.MIN_VALUE / 10) || (ans == Integer.MIN_VALUE / 10 && mod < -8)) {
                    return 0;
                }
                ans = ans * 10 + mod;
                x /= 10;
            }
            return ans;
        }
    }
}
