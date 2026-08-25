class Solution {
    maxProfit(prices: number[]): number {
        let ans = 0;

        let l = 0;
        for(let r = 0; r < prices.length; r++){
            if(prices[r] < prices[l]){
                l = r;
            } else {
                ans = Math.max(ans, prices[r] - prices[l]);
            }
        }

        return ans;
    }
}