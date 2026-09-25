class Solution {
    shipWithinDays(weights: number[], days: number): number {
        function calculateDays(weights: number[], capacity: number): number {
            let days = 1;
            let load = 0;
            for (const weight of weights) {
                if (load + weight > capacity) {
                    days++;
                    load = 0;
                }
                load += weight;
            }
            return days;
        }

        const n = weights.length;
        let min = 0,
            max = 0;
        for (let i = 0; i < n; i++) {
            min = Math.max(min, weights[i]);
            if (i <= n - days) {
                max += weights[i];
            }
        }
        while (min < max) {
            const curr = min + Math.floor((max - min) / 2);
            const requiredDays = calculateDays(weights, curr);

            if (requiredDays <= days) {
                max = curr;
            } else {
                min = curr + 1;
            }
        }
        return min;
    }
}
