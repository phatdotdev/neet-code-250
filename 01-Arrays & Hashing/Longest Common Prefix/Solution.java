class Solution {
    public String longestCommonPrefix(String[] strs) {
        int len = Integer.MAX_VALUE;
        for (String str : strs) {
            len = Math.min(len, str.length());
        }
        int i = 0;
        while (i < len) {
            for (int j = 1; j < strs.length; j++) {
                if (strs[j].charAt(i) != strs[j - 1].charAt(i)) {
                    return strs[0].substring(0, i);
                }
            }
            i++;
        }
        return strs[0].substring(0, i);
    }
}