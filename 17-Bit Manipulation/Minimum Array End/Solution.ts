class Solution {
    minEnd(n: number, x: number): number {
        let ans = x;
        let k = n - 1;
        for (let bit = 0; k > 0; bit++) {
            const value = 2 ** bit;
            if (Math.floor(x / value) % 2 === 0) {
                if (k % 2 !== 0) {
                    ans += value;
                }
                k = Math.floor(k / 2);
            }
        }
        return ans;
    }
}
