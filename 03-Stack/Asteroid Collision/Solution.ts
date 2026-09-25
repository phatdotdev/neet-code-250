class Solution {
    asteroidCollision(asteroids: number[]): number[] {
        let i = -1;
        for (const asteroid of asteroids) {
            let destroyed = false;
            while (i >= 0 && asteroids[i] > 0 && asteroid < 0) {
                if (asteroids[i] + asteroid < 0) {
                    i--;
                } else if (asteroids[i] + asteroid === 0) {
                    i--;
                    destroyed = true;
                    break;
                } else {
                    destroyed = true;
                    break;
                }
            }
            if (!destroyed) {
                asteroids[++i] = asteroid;
            }
        }
        return asteroids.slice(0, i + 1);
    }
}
