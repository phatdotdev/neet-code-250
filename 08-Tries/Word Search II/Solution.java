import java.util.ArrayList;
import java.util.List;

class Solution {

    class TrieNode {
        TrieNode[] children = new TrieNode[26];
        String word = null;
    }

    public List<String> findWords(char[][] board, String[] words) {
        List<String> result = new ArrayList<>();
        TrieNode root = buildTrie(words);
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                dfs(board, r, c, root, result);
            }
        }
        return result;
    }

    private void dfs(char[][] board, int r, int c, TrieNode node, List<String> result) {
        char ch = board[r][c];
        if (ch == '#' || node.children[ch - 'a'] == null) {
            return;
        }

        TrieNode nextNode = node.children[ch - 'a'];

        if (nextNode.word != null) {
            result.add(nextNode.word);
            nextNode.word = null;
        }

        board[r][c] = '#';

        if (r > 0) {
            dfs(board, r - 1, c, nextNode, result);
        }
        if (r < board.length - 1) {
            dfs(board, r + 1, c, nextNode, result);
        }
        if (c > 0) {
            dfs(board, r, c - 1, nextNode, result);
        }
        if (c < board[0].length - 1) {
            dfs(board, r, c + 1, nextNode, result);
        }

        board[r][c] = ch;
    }

    private TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode curr = root;
            char[] chars = word.toCharArray();
            for (char ch : chars) {
                if (curr.children[ch - 'a'] == null) {
                    curr.children[ch - 'a'] = new TrieNode();
                }
                curr = curr.children[ch - 'a'];
            }
            curr.word = word;
        }
        return root;
    }
}
