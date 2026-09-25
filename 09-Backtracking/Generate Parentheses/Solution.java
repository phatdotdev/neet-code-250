import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> generateParenthesis(int n) {
        StringBuilder sb = new StringBuilder();
        List<String> res = new ArrayList<>();
        backtrack(sb, n, 0, 0, res);
        return res;
    }

    private void backtrack(StringBuilder sb, int n, int open, int close, List<String> res) {
        if (sb.length() == n * 2) {
            res.add(String.valueOf(sb));
            return;
        }
        if (open < n) {
            sb.append('(');
            backtrack(sb, n, open + 1, close, res);
            sb.delete(sb.length() - 1, sb.length());
        }
        if (close < open) {
            sb.append(')');
            backtrack(sb, n, open, close + 1, res);
            sb.delete(sb.length() - 1, sb.length());
        }
    }
}
