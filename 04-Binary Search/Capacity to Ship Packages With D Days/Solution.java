class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int n = weights.length;
        int min = 0;
        int max = 0;
        for (int i = 0; i < n; i++) {
            min = Math.max(min, weights[i]);
            if (i <= n - days) {
                max += weights[i];
            }
        }
        while (min <= max) {
            int mid = min + (max - min) / 2;
            int d = calculateDays(weights, mid);
            if (d <= days) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }
        return min;
    }

    private int calculateDays(int weights[], int capacity) {
        int days = 0;
        int c = capacity;
        int i = 0;
        while (i < weights.length) {
            if (c >= weights[i]) {
                c -= weights[i];
                i++;
            } else {
                c = capacity;
                days++;
            }
        }
        if (c < capacity) {
            days++;
        }
        return days;
    }
}
