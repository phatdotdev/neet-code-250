class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        int start = 0;
        int total = 0;
        for (int i = 0; i < n; i++) {
            total += gas[i] - cost[i];
            if (total < 0) {
                total = 0;
                start = i + 1;
            }
        }
        for (int i = 0; i < start; i++) {
            total += gas[i] - cost[i];
        }
        if (total < 0) {
            return -1;
        }
        return start;
    }
}
