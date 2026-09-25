class CountSquares {
    private counts: number[][];
    private maxX = 0;
    private maxY = 0;

    constructor() {
        this.counts = Array.from({ length: 1001 }, () =>
            new Array(1001).fill(0),
        );
    }

    add(point: number[]): void {
        this.counts[point[0]][point[1]]++;
    }

    count(point: number[]): number {
        const px = point[0];
        const py = point[1];

        let count = 0;

        let x = px > py ? px - py : 0;
        let y = px > py ? 0 : py - px;

        for (let y = 0; y <= 1000; y++) {
            if (py === y) {
                continue;
            }
            const d = Math.abs(py - y);
            const xRight = px + d;
            if (xRight <= 1000) {
                count +=
                    this.counts[px][y] *
                    this.counts[xRight][y] *
                    this.counts[xRight][py];
            }

            const xLeft = px - d;
            if (xLeft >= 0) {
                count +=
                    this.counts[xLeft][y] *
                    this.counts[px][y] *
                    this.counts[xLeft][py];
            }
        }

        return count;
    }
}
