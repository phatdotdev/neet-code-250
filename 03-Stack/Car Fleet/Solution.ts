class Car {
    position: number;
    time: number;

    constructor(position: number, time: number) {
        this.position = position;
        this.time = time;
    }
}

class Solution1 {
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        const cars: Car[] = [];
        for (let i = 0; i < n; i++) {
            const time = (target - position[i]) / speed[i];
            cars.push(new Car(position[i], time));
        }
        cars.sort((a, b) => b.position - a.position);

        let count = 1;
        let maxTime = cars[0].time;
        for (let i = 1; i < n; i++) {
            if (cars[i].time > maxTime) {
                count++;
                maxTime = cars[i].time;
            }
        }
        return count;
    }
}

class Solution2 {
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        if (n <= 1) return n;

        const timeToTarget = new Float64Array(target);
        for (let i = 0; i < n; i++) {
            timeToTarget[position[i]] = (target - position[i]) / speed[i];
        }
        let count = 0;
        let maxTime = 0;
        for (let i = target - 1; i >= 0; i--) {
            if (timeToTarget[i] > maxTime) {
                count++;
                maxTime = timeToTarget[i];
            }
        }

        return count;
    }
}
