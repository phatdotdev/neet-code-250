class Solution {
    public int maxProfit(int[] prices) {
        int ans = 0;
        int j = 0;
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < prices[j]) {
                j = i;
            }
            ans = Math.max(ans, prices[i] - prices[j]);
        }
        return ans;
    }
}
