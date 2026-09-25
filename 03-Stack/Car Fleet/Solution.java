import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        Map<Integer, Double> cars = new HashMap<>();
        double[] time = new double[n];
        for (int i = 0; i < n; i++) {
            time[i] = (double) (target - position[i]) / speed[i];
            cars.put(position[i], time[i]);
        }
        Arrays.sort(position);

        int count = 0;
        double prev = 0;
        for (int i = n - 1; i >= 0; i--) {
            double t = cars.get(position[i]);
            if (t > prev) {
                count++;
                prev = t;
            }
        }
        return count;
    }
}