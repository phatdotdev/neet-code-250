import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        backtrack(n, k, 1, new ArrayList<>(), res);
        return res;
    }

    private void backtrack(int n, int k, int i, List<Integer> curr, List<List<Integer>> res) {
        if (curr.size() == k) {
            res.add(new ArrayList<>(curr));
            return;
        }
        if (i > n) {
            return;
        }
        curr.add(i);
        backtrack(n, k, i + 1, curr, res);
        curr.remove(curr.size() - 1);
        backtrack(n, k, i + 1, curr, res);
    }
}
