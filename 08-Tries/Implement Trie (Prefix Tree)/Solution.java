class Solution {
    class PrefixTree {

        class TreeNode {
            boolean isWord;
            TreeNode[] children;

            TreeNode() {
                this.isWord = false;
                this.children = new TreeNode[26];
            }
        }

        TreeNode root;

        public PrefixTree() {
            this.root = new TreeNode();
        }

        public void insert(String word) {
            TreeNode curr = this.root;
            for (char ch : word.toCharArray()) {
                if (curr.children[ch - 'a'] == null) {
                    curr.children[ch - 'a'] = new TreeNode();
                }
                curr = curr.children[ch - 'a'];
            }
            curr.isWord = true;
        }

        public boolean search(String word) {
            TreeNode curr = this.root;
            int n = word.length();
            for (int i = 0; i < n; i++) {
                int j = word.charAt(i) - 'a';
                if (curr.children[j] == null) {
                    return false;
                }
                curr = curr.children[j];
            }
            return curr.isWord;
        }

        public boolean startsWith(String prefix) {
            TreeNode curr = this.root;
            int n = prefix.length();
            for (int i = 0; i < n; i++) {
                int j = prefix.charAt(i) - 'a';
                if (curr.children[j] == null) {
                    return false;
                }
                curr = curr.children[j];
            }
            return true;
        }
    }
}
