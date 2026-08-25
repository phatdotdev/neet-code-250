class Solution extends GuessGame {
    public int guessNumber(int n) {
        int l = 1, r = n;
        while (l <= r) {
            int pick = l + (r - l) / 2;
            int guess = guess(pick);
            if (guess == 0) {
                return pick;
            } else if (guess == 1) {
                l = pick + 1;
            } else {
                r = pick - 1;
            }
        }
        return l;
    }
}