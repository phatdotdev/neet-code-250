import java.util.Arrays;

class Solution {
    class Solution1 {
        public int minExtraChar(String s, String[] dictionary) {
            return findWords(s, dictionary, 0);
        }

        private int findWords(String s, String[] dictionary, int i) {
            int n = s.length();
            if (i == n)
                return 0;
            int min = n - i;
            for (String word : dictionary) {
                int len = word.length();
                if (i + len <= n && s.startsWith(word, i)) {
                    min = Math.min(min, findWords(s, dictionary, i + len));
                }
            }
            return Math.min(findWords(s, dictionary, i + 1) + 1, min);
        }
    }

    class Solution2 {
        public int minExtraChar(String s, String[] dictionary) {
            int n = s.length();
            int[] memo = new int[n];
            Arrays.fill(memo, -1);
            return findWords(s, dictionary, memo, 0);
        }

        public int findWords(String s, String[] dictionary, int[] memo, int i) {
            int n = s.length();
            if (i == n)
                return 0;
            if (memo[i] != -1) {
                return memo[i];
            }
            int min = 1 + findWords(s, dictionary, memo, i + 1);
            for (String word : dictionary) {
                int len = word.length();
                if (s.startsWith(word, i)) {
                    min = Math.min(min, findWords(s, dictionary, memo, i + len));
                }
            }
            return memo[i] = min;
        }
    }

    class Solution3 {
        class TrieNode {
            TrieNode[] children = new TrieNode[26];
            boolean isWord = false;
        }

        private TrieNode root = new TrieNode();

        private void insert(String word) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (node.children[c - 'a'] == null) {
                    node.children[c - 97] = new TrieNode();
                }
                node = node.children[idx];
            }
            node.isWord = true;
        }

        public int minExtraChar(String s, String[] dictionary) {
            for (String word : dictionary) {
                insert(word);
            }
            int n = s.length();
            int[] dp = new int[n + 1];
            for (int i = n - 1; i >= 0; i--) {
                dp[i] = dp[i + 1] + 1;
                TrieNode node = root;
                for (int j = i; j < n; j++) {
                    int idx = s.charAt(j) - 'a';
                    if (node.children[idx] == null) {
                        break;
                    }
                    node = node.children[idx];
                    if (node.isWord) {
                        dp[i] = Math.min(dp[i], dp[j + 1]);
                    }
                }
            }
            return dp[0];
        }
    }
}
