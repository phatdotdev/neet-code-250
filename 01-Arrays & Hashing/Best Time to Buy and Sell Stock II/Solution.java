class Solution {
    class Solution1 {
        public int maxProfit(int[] prices) {
            int p = 0;
            for (int i = 1; i < prices.length; i++) {
                if (prices[i] > prices[i - 1]) {
                    p += (prices[i] - prices[i - 1]);
                }
            }
            return p;
        }
    }

    class Solution2 {
        public int maxProfit(int[] prices) {
            int l = 0, r = 1;
            int profit = 0;
            while (l < r) {
                int p = prices[r] - prices[l];
                if (p < 0) {
                    p = 0;
                } else {
                    profit += p;
                }
                l++;
                r++;
            }
            return profit;
        }
    }
}
