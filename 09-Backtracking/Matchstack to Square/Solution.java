import java.util.Arrays;

class Solution {
    public boolean makesquare(int[] matchsticks) {
        int n = matchsticks.length;
        int sum = Arrays.stream(matchsticks).reduce(0, (a, b) -> a + b);
        if (sum % 4 != 0) {
            return false;
        }
        int target = sum / 4;
        int[] edges = new int[4];
        return backtrack(n - 1, matchsticks, edges, target);
    }

    private boolean backtrack(int i, int[] sticks, int[] edges, int target) {
        if (i < 0) {
            return true;
        }
        for (int j = 0; j < 4; j++) {
            if (edges[j] + sticks[i] > target) {
                continue;
            }
            edges[j] -= sticks[i];
            if (backtrack(i - 1, sticks, edges, target)) {
                return true;
            }
            edges[j] += sticks[i];
            if (edges[j] == 0) {
                break;
            }
        }
        return false;
    }
}
