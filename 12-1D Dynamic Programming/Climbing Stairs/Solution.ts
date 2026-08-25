class Solution {
    climbStairs(n: number): number{
        const count: number[] = new Array(n + 1).fill(0);
        count[0] = 1;
        count[1] = 1;
        for(let i = 2; i <= n; i++){
            count[i] = count[i-2] + count[i-1];
        }
        return count[n];
    }
}