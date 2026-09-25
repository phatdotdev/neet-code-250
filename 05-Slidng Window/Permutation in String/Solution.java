import java.util.Arrays;

class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] arr1 = new int[26];
        int[] arr2 = new int[26];

        int k = s1.length();
        int n = s2.length();

        for (int i = 0; i < k; i++) {
            arr1[s1.charAt(i) - 'a']++;
        }
        int l = 0;
        for (int r = 0; r < n; r++) {
            if (r >= k) {
                arr2[s2.charAt(l) - 'a']--;
                l++;
            }
            arr2[s2.charAt(r) - 'a']++;
            if (Arrays.compare(arr1, arr2) == 0) {
                return true;
            }
        }
        return false;
    }
}
