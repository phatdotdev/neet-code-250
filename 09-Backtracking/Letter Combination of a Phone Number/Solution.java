import java.util.ArrayList;
import java.util.List;

class Solution {

    private final String[] LETTERS = {
            "", "", "abc", "def",
            "ghi", "jkl", "mno",
            "pqrs", "tuv", "wxyz"
    };

    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return res;
        }
        StringBuilder sb = new StringBuilder();
        backtrack(0, digits, sb, res);
        return res;
    }

    private void backtrack(int i, String digits, StringBuilder sb, List<String> res) {
        if (i == digits.length()) {
            res.add(sb.toString());
            return;
        }
        String letters = LETTERS[digits.charAt(i) - '0'];
        for (char c : letters.toCharArray()) {
            sb.append(c);
            backtrack(i + 1, digits, sb, res);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}
