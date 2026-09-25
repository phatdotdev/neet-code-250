import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public boolean canReach(String s, int minJump, int maxJump) {
        int n = s.length();
        int farthest = 0;

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(0);
        while (!queue.isEmpty()) {

            int i = queue.poll();
            int j = Math.max(farthest + 1, i + minJump);
            for (; j <= i + maxJump && j < n; j++) {
                if (s.charAt(j) == '0') {
                    queue.offer(j);
                    farthest = j;
                }
            }
        }
        return farthest == n - 1;
    }
}
