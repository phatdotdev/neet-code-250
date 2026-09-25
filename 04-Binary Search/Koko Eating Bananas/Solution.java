class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int max = 0;
        int min = 0;
        for (int pile : piles) {
            max = Math.max(max, pile);
            min += pile;
        }
        min /= h;
        int minSpeed = max;
        while (min <= max) {
            int speed = min + (max - min) / 2;
            int hour = getHours(piles, speed);
            if (hour <= h) {
                minSpeed = speed;
                max = speed - 1;
            } else {
                min = speed + 1;
            }
        }
        return minSpeed;
    }

    private int getHours(int[] piles, int speed) {
        int h = 0;
        for (int pile : piles) {
            h += Math.ceil(pile * 1.0 / speed);
        }
        return h;
    }

}