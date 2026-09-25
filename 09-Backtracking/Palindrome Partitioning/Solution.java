import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>(), res);
        return res;
    }

    private void backtrack(String s, int i, List<String> curr, List<List<String>> res) {
        if (i == s.length()) {
            res.add(new ArrayList<>(curr));
        }
        for (int j = i; j < s.length(); j++) {
            if (isPalindrome(s, i, j)) {
                curr.add(s.substring(i, j + 1));
                backtrack(s, j + 1, curr, res);
                curr.remove(curr.size() - 1);
            }
        }
    }

    private boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

}
