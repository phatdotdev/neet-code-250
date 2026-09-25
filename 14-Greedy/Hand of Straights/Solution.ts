class Solution {
    isNStraightHand(hand: number[], groupSize: number): boolean {
        const n = hand.length;
        if (groupSize === 1) {
            return true;
        }
        if (n % groupSize !== 0) {
            return false;
        }
        const count: number[] = new Array(1001).fill(0);
        for (const num of hand) {
            count[num]++;
        }
        for (let i = 0; i <= 1000; i++) {
            if (count[i] === 0) continue;
            const size = count[i];
            for (let j = i; j < i + groupSize; j++) {
                if (j > 1000) {
                    return false;
                }
                if (count[j] < size) {
                    return false;
                }
                count[j] -= size;
            }
        }
        return true;
    }
}
