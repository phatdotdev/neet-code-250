import java.util.ArrayList;
import java.util.List;

class Solution {
    class Solution1 {
        public int calPoints(String[] operations) {
            List<Integer> points = new ArrayList<>();
            for (String operation : operations) {
                if (operation.equals("C")) {
                    points.remove(points.size() - 1);
                } else if (operation.equals("D")) {
                    points.add(2 * points.get(points.size() - 1));
                } else if (operation.equals("+")) {
                    points.add(points.get(points.size() - 2) + points.get(points.size() - 1));
                } else {
                    points.add(Integer.parseInt(operation));
                }
            }
            int res = 0;
            for (int point : points) {
                res += point;
            }
            return res;
        }
    }

    class Solution2 {
        public int calPoints(String[] operations) {
            int[] scores = new int[operations.length];
            int size = 0;
            int total = 0;
            for (String operation : operations) {
                if (operation.equals("D")) {
                    scores[size] = 2 * scores[size - 1];
                    total += scores[size];
                    size++;
                } else if (operation.equals("C")) {
                    size--;
                    total -= scores[size];
                } else if (operation.equals("+")) {
                    scores[size] = scores[size - 1] + scores[size - 2];
                    total += scores[size];
                    size++;
                } else {
                    scores[size] = Integer.parseInt(operation);
                    total += scores[size];
                    size++;
                }
            }
            return total;
        }
    }
}