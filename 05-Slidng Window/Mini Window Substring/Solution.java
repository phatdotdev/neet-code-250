class Solution {
    class Solution1 {
        public String minWindow(String s, String t) {
            if (s == null || t == null) {
                return "";
            }
            int[] targetCount = new int[128];
            for (char c : t.toCharArray()) {
                targetCount[c]++;
            }

            int left = 0;
            int minLen = Integer.MAX_VALUE;
            int startIndex = 0;
            int requiresChars = t.length();

            for (int right = 0; right < s.length(); right++) {
                char rightChar = s.charAt(right);
                if (targetCount[rightChar] > 0) {
                    requiresChars--;
                }
                targetCount[rightChar]--;

                while (requiresChars == 0) {
                    if (right - left + 1 < minLen) {
                        minLen = right - left + 1;
                        startIndex = left;
                    }

                    char leftChar = s.charAt(left);
                    targetCount[leftChar]++;

                    if (targetCount[leftChar] > 0) {
                        requiresChars++;
                    }

                    left++;
                }
            }

            return minLen == Integer.MAX_VALUE ? "" : s.substring(startIndex, startIndex + minLen);
        }
    }

    class Solution2 {
        public String minWindow(String s, String t) {
            if (s == null || t == null) {
                return "";
            }
            int[] targetCount = new int[128];
            for (char c : t.toCharArray()) {
                targetCount[c]++;
            }

            int startIndex = 0;
            int minLen = Integer.MAX_VALUE;
            int requiredChars = t.length();

            int left = 0;
            for (int right = 0; right < s.length(); right++) {
                int rightChar = s.charAt(right);
                if (targetCount[rightChar] > 0) {
                    requiredChars--;
                }
                targetCount[rightChar]++;
                while (requiredChars == 0) {
                    char leftChar = s.charAt(left);
                    targetCount[leftChar]++;
                    if (targetCount[leftChar] > 0) {
                        requiredChars++;
                    }

                    if (right - left + 1 > minLen) {
                        minLen = right - left + 1;
                        startIndex = left;
                    }

                    left++;
                }
            }

            return minLen == Integer.MAX_VALUE ? "" : s.substring(startIndex, startIndex + minLen);
        }
    }
}
