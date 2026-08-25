class Solution {
    class Solution1 {
        public int mySqrt(int x) {
            if (x == 0)
                return x;

            int l = 1, r = x;
            int ans = 0;

            while (l <= r) {
                int m = l + (r - l) / 2;
                if ((long) m * m == x) {
                    return m;
                } else if ((long) m * m > x) {
                    r = m - 1;
                } else {
                    l = m + 1;
                    ans = m;
                }
            }
            return ans;
        }
    }

    class Solution2 {
        public int mySqrt(int x) {
            if (x == 0)
                return 0;
            int l = 1, r = x;
            while (l < r) {
                int m = l + (r - l + 1) / 2;
                if ((long) m * m == x) {
                    return m;
                } else if ((long) m * m > x) {
                    r = m - 1;
                } else {
                    l = m;
                }
            }
            return l;
        }
    }
}
