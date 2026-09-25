class Solution {
    public int countSubstrings(String s) {
        if (s.length() < 2)
            return s.length();
        int n = s.length();
        int res = 0;
        for (int i = 0; i < n; i++) {
            if (i > 0 && s.charAt(i - 1) == s.charAt(i)) {
                continue;
            }
            res += count(i, s);
        }
        return res;
    }

    private int count(int l, String s) {
        int n = s.length();
        int r = l;
        while (r + 1 < n && s.charAt(r + 1) == s.charAt(l)) {
            r++;
        }
        int count = (r - l + 1) * (r - l + 2) / 2;
        while (l - 1 >= 0 && r + 1 < n && s.charAt(l - 1) == s.charAt(r + 1)) {
            count++;
            l--;
            r++;
        }
        return count;
    }
}
