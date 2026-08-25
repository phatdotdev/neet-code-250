import java.util.PriorityQueue;

class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a, b) -> b - a);
        for (int stone : stones) {
            pq.offer(stone);
        }
        while (pq.size() > 1) {
            int w1 = pq.poll(), w2 = pq.poll();
            pq.offer(w1 - w2);
        }
        return pq.poll();
    }
}
