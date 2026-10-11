class Solution {
    candy(ratings: number[]): number {
        const n: number = ratings.length;
        const candies: number[] = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        let totalCandies = candies[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
            totalCandies += candies[i];
        }

        return totalCandies;
    }
}

class Solution2 {
    candy(ratings: number[]): number {
        if (ratings === null || ratings.length === 0) return 0;
        const n: number = ratings.length;
        let candies = 1;
        let up = 0;
        let down = 0;
        let peak = 0;
        for (let i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                up++;
                down = 0;
                peak = up;
                candies += 1 + up;
            } else if (ratings[i] === ratings[i - 1]) {
                up = 0;
                down = 0;
                peak = 0;
                candies += 1;
            } else {
                down++;
                up = 0;
                candies += down + (down > peak ? 1 : 0);
            }
        }
        return candies;
    }
}
