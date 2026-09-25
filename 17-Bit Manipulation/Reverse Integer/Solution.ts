class Solution {
    reverse(x: number): number {
        const MAX_INT = 2 ** 31 - 1;
        const MIN_INT = -(2 ** 31);

        let ans = 0;

        while (x != 0) {
            if (ans > MAX_INT || ans < MIN_INT) {
                return 0;
            }
            const r = x % 10;
            ans = ans * 10 + r;
            x = Math.trunc(x / 10);
        }
        return ans > MAX_INT || ans < MIN_INT ? 0 : ans;
    }
}
