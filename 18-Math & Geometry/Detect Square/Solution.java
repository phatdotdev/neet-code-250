import java.util.*;

class Solution {

    class CountSquares {

        private int[][] counts;
        private List<int[]> pointList;

        public CountSquares() {
            counts = new int[1001][1001];
            pointList = new ArrayList<>();
        }

        public void add(int[] point) {
            counts[point[0]][point[1]]++;
            pointList.add(point);
        }

        public int count(int[] point) {
            int px = point[0];
            int py = point[1];
            int count = 0;

            for (int[] p : pointList) {
                int x = p[0];
                int y = p[1];
                if (Math.abs(px - x) != Math.abs(py - y) || px == x) {
                    continue;
                }
                int countP2 = counts[px][y];
                int countP4 = counts[x][py];

                count += countP2 * countP4;
            }

            return count;
        }
    }

}