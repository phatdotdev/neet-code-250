class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        String res = "";
        for (int i = 0; i < n; i++) {
            String s1 = palindrome(i, i, s);
            String s2 = palindrome(i, i + 1, s);
            if (res.length() < s1.length()) {
                res = s1;
            }
            if (res.length() < s2.length()) {
                res = s2;
            }
        }

        return res;
    }

    private String palindrome(int l, int r, String s) {
        int n = s.length();
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            l--;
            r++;
        }
        return s.substring(l + 1, r);
    }
}
