import java.util.Arrays;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        s.trim();
        int[] pos = new int[256];
        Arrays.fill(pos, -1);

        int maxLen = 0;
        int l = 0;
        for (int r = 0; r < n; r++) {
            int p = s.charAt(r);
            if (l <= p) {
                l = p + 1;
            }
            maxLen = Math.max(maxLen, r - l);
            pos[p] = r;
        }
        return maxLen;
    }
}
