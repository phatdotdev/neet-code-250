import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    boolean[] col;
    boolean[] diag1;
    boolean[] diag2;

    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        col = new boolean[n];
        diag1 = new boolean[2 * n - 1];
        diag2 = new boolean[2 * n - 1];
        solve(n, 0, new ArrayList<>(), res);
        return res;
    }

    private void solve(int n, int i, List<String> curr, List<List<String>> res) {
        if (i == n) {
            res.add(new ArrayList<>(curr));
        }
        for (int j = 0; j < n; j++) {
            if (!col[j] && !diag1[i + j] && !diag2[n - 1 - j + i]) {
                col[j] = true;
                diag1[i + j] = true;
                diag2[n - 1 - j + i] = true;
                curr.add(getRow(n, j));
                solve(n, i + 1, curr, res);
                col[j] = false;
                diag1[i + j] = false;
                diag2[n - 1 - j + i] = false;
                curr.remove(curr.size() - 1);
            }
        }
    }

    private String getRow(int n, int j) {
        char[] row = new char[n];
        Arrays.fill(row, '.');
        row[j] = 'Q';
        return new String(row);
    }
}