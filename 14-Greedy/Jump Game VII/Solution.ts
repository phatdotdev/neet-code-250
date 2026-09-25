class Solution {
    canReach(s: string, minJump: number, maxJump: number): boolean {
        const n = s.length;
        const dp: boolean[] = new Array(n).fill(false);
        dp[0] = true;
        let reachableCount = 0;
        for (let i = 1; i < n; i++) {
            if (i >= minJump && dp[i - minJump]) {
                reachableCount++;
            }
            if (i > maxJump && dp[i - maxJump - 1]) {
                reachableCount--;
            }
            if (s[i] === "0" && reachableCount > 0) {
                dp[i] = true;
            }
        }
        return dp[n - 1];
    }
}
