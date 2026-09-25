class Solution {
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const n = gas.length;
        let total = 0;
        let currTotal = 0;
        let start = 0;
        for (let i = 0; i < n; i++) {
            currTotal += gas[i] - cost[i];
            if (currTotal < 0) {
                start = i + 1;
                currTotal = 0;
            }
            total += gas[i] - cost[i];
        }
        if (total < 0) {
            return -1;
        }
        return start;
    }
}
