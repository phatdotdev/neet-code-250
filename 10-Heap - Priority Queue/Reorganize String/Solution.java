import java.util.PriorityQueue;

class Solution {
    class Pair {
        char ch;
        int count;

        Pair(char ch, int count) {
            this.count = count;
            this.ch = ch;
        }
    }

    public String reorganizeString(String s) {
        int n = s.length();
        int[] count = new int[26];
        for (int i = 0; i < n; i++) {
            count[s.charAt(i) - 'a']++;
        }
        PriorityQueue<Pair> pq = new PriorityQueue<>(
                (a, b) -> Integer.compare(b.count, a.count));
        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) {
                pq.offer(new Pair((char) ('a' + i), count[i]));
                if (count[i] > (n + 1) / 2) {
                    return "";
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        while (pq.size() >= 2) {
            Pair first = pq.poll();
            Pair second = pq.poll();
            sb.append(first.ch).append(second.ch);
            first.count--;
            second.count--;
            if (first.count > 0) {
                pq.offer(first);
            }
            if (second.count > 0) {
                pq.offer(second);
            }
        }
        if (!pq.isEmpty()) {
            sb.append(pq.poll().ch);
        }
        return sb.toString();
    }
}
