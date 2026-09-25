import java.util.PriorityQueue;

class Solution {

    class Solution1 {
        public String longestDiverseString(int a, int b, int c) {
            StringBuilder sb = new StringBuilder();
            int[] count = { a, b, c };
            while (true) {
                int bestIndex = -1;
                int maxCount = 0;
                int len = sb.length();

                for (int i = 0; i < 3; i++) {
                    char ch = (char) ('a' + i);
                    if (len >= 2 && sb.charAt(len - 1) == ch && sb.charAt(len - 2) == ch) {
                        continue;
                    }
                    if (count[i] > maxCount) {
                        maxCount = count[i];
                        bestIndex = i;
                    }
                }

                if (bestIndex == -1) {
                    break;
                }

                sb.append((char) ('a' + bestIndex));
                count[bestIndex]--;
            }
            return sb.toString();
        }
    }

    class Solution2 {
        class Pair {
            char ch;
            int count;

            Pair(char ch, int count) {
                this.ch = ch;
                this.count = count;
            }
        }

        public String longestDiverseString(int a, int b, int c) {

            StringBuilder sb = new StringBuilder();
            PriorityQueue<Pair> pq = new PriorityQueue<>((x, y) -> Integer.compare(y.count, x.count));

            if (a > 0)
                pq.offer(new Pair('a', a));
            if (b > 0)
                pq.offer(new Pair('b', b));
            if (c > 0)
                pq.offer(new Pair('c', c));
            while (!pq.isEmpty()) {
                int len = sb.length();
                Pair first = pq.poll();
                if (len >= 2 && first.ch == sb.charAt(len - 1) && first.ch == sb.charAt(len - 2)) {
                    if (pq.isEmpty()) {
                        break;
                    }
                    Pair second = pq.poll();
                    sb.append(second.ch);
                    second.count--;
                    if (second.count > 0) {
                        pq.offer(second);
                    }
                } else {
                    sb.append(first.ch);
                    first.count--;
                }
                if (first.count > 0) {
                    pq.offer(first);
                }
            }
            return sb.toString();
        }
    }
}
