import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            if (a[0] != b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
        List<int[]> result = new ArrayList<>();
        int n = intervals.length;
        int[] interval = intervals[0];
        for (int i = 1; i < n; i++) {
            if (intervals[i][0] <= interval[1]) {
                interval[0] = Math.min(interval[0], intervals[i][0]);
                interval[1] = Math.max(interval[1], intervals[i][1]);
            } else {
                result.add(interval);
                interval = intervals[i];
            }
        }
        result.add(interval);
        return result.toArray(new int[0][]);
    }
}
