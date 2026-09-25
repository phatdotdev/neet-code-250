class Solution {
    public int leastInterval(char[] tasks, int n) {
        int max = 0, maxCount = 0;
        int[] count = new int[26];
        for (char task : tasks) {
            count[task - 'A']++;
            int k = count[task - 'A'];
            if (k == max) {
                maxCount++;
            } else if (k > max) {
                max = k;
                maxCount = 1;
            }
        }
        int interval = (max - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, interval);
    }
}