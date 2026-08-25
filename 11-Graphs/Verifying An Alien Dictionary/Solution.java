class Solution {
    class Solution1 {
        public boolean isAlienSorted(String[] words, String order) {
            int n = order.length();
            Map<Character, Integer> map = new HashMap();
            for (int i = 0; i < n; i++) {
                map.put(order.charAt(i), i);
            }
            for (int i = 1; i < words.length; i++) {
                if (!compare(words[i - 1], words[i], map)) {
                    return false;
                }
            }
            return true;
        }

        private boolean compare(String str1, String str2, Map<Character, Integer> map) {
            int n1 = str1.length();
            int n2 = str2.length();
            for (int i = 0; i < n2; i++) {
                if (i >= n1)
                    return true;
                int ch1 = map.get(str1.charAt(i));
                int ch2 = map.get(str2.charAt(i));
                if (ch2 > ch1)
                    return true;
                if (ch2 < ch1)
                    return false;
            }
            return n2 >= n1;
        }
    }

    class Solution2 {
        public boolean isAlienSorted(String[] words, String order) {
            int[] rank = new int[26];
            for (int i = 0; i < 26; i++) {
                rank[order.charAt(i) - 'a'] = i;
            }
            for (int i = 1; i < words.length; i++) {
                if (!compare(words[i - 1], words[i], rank)) {
                    return false;
                }
            }
            return true;
        }

        private boolean compare(String a, String b, int[] rank) {
            int len = Math.min(a.length(), b.length());
            for (int i = 0; i < len; i++) {
                int rankA = rank[a.charAt(i) - 'a'];
                int rankB = rank[b.charAt(i) - 'a'];
                if (rankA > rankB)
                    return false;
                if (rankA < rankB)
                    return true;
            }
            return b.length() > a.length();
        }
    }
}