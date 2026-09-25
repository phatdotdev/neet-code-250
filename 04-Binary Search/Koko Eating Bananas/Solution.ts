class Solution {
    minEatingSpeed(piles: number[], h: number): number {
        let lSpeed = 1;
        let rSpeed = 0;

        for (const pile of piles) {
            rSpeed = Math.max(rSpeed, pile);
        }

        let minSpeed = rSpeed;

        function computeHours(piles: number[], speed: number): number {
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / speed);
            }
            return hours;
        }

        while (lSpeed <= rSpeed) {
            const cSpeed = lSpeed + Math.floor((rSpeed - lSpeed) / 2);
            const hours = computeHours(piles, cSpeed);
            if (hours <= h) {
                minSpeed = cSpeed;
                rSpeed = cSpeed - 1;
            } else {
                lSpeed = cSpeed + 1;
            }
        }

        return minSpeed;
    }
}
