import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public String predictPartyVictory(String senate) {
        int n = senate.length();
        Deque<Integer> radiants = new ArrayDeque<>();
        Deque<Integer> dires = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (senate.charAt(i) == 'R') {
                radiants.offer(i);
            } else {
                dires.offer(i);
            }
        }
        while (!dires.isEmpty() && !radiants.isEmpty()) {
            int rIndex = radiants.poll();
            int dIndex = dires.poll();
            if (rIndex < dIndex) {
                radiants.offer(rIndex + n);
            } else {
                dires.offer(dIndex + n);
            }
        }
        return radiants.isEmpty() ? "Dire" : "Radiant";
    }
}
