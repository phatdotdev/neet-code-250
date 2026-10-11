import java.util.Arrays;

class Solution {
    class Solution1 {
        public int candy(int[] ratings) {
            int n = ratings.length;

            int[] candies = new int[n];
            Arrays.fill(candies, 1);
            for (int i = 1; i < n; i++) {
                if (ratings[i] > ratings[i - 1]) {
                    candies[i] = candies[i - 1] + 1;
                }
            }
            for (int i = n - 2; i >= 0; i--) {
                if (ratings[i] > ratings[i + 1]) {
                    candies[i] = Math.max(candies[i], candies[i + 1] + 1);
                }
            }
            return Arrays.stream(candies).reduce(0, (acc, curr) -> acc + curr);
        }
    }

    class Solution2 {
        public int candy(int[] ratings) {
            int candies = 1;

            int n = ratings.length;
            int up = 0;
            int down = 0;
            int peak = 0;

            for (int i = 1; i < n; i++) {
                if (ratings[i] > ratings[i - 1]) {
                    up++;
                    peak++;
                    candies += up + 1;
                } else if (ratings[i] == ratings[i - 1]) {
                    up = 0;
                    down = 0;
                    peak = 0;
                    candies += 1;
                } else {
                    up = 0;
                    down++;
                    candies += down + (down > peak ? 1 : 0);
                }
            }

            return candies;
        }
    }
}