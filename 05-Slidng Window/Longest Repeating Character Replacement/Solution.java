class Solution {
    public int characterReplacement(String s, int k) {
        int n = s.length();
        int[] count = new int[26];
        int l = 0;
        int maxCount = 0;

        for (int r = 0; r < n; r++) {
            int p = s.charAt(r) - 'A';
            count[p]++;

            maxCount = Math.max(maxCount, count[p]);

            if (r - l + 1 - maxCount > k) {
                count[s.charAt(l) - 'A']--;
                l++;
            }
        }

        return n - l;
    }
}
