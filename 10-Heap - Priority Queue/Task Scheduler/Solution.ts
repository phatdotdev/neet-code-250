class Solution {
    leastInterval(tasks: string[], n: number): number {
        const count: number[] = new Array(26).fill(0);
        let max = 0;
        let maxCount = 0;
        for (const task of tasks) {
            const idx = task.charCodeAt(0) - "A".charCodeAt(0);
            count[idx]++;
            if (count[idx] === max) {
                maxCount++;
            } else if (count[idx] > max) {
                max = count[idx];
                maxCount = 1;
            }
        }
        const intervals = (max - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, intervals);
    }
}
