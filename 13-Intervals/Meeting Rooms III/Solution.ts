class Solution {
    mostBooked(n: number, meetings: number[][]): number {
        meetings.sort((a, b) => a[0] - b[0]);
        const roomAvailabilityTime: number[] = new Array(n).fill(0);
        const count: number[] = new Array(n).fill(0);

        for (const [start, end] of meetings) {
            const duration = end - start;
            let foundAvailableRoom = false;

            let minAvailableTime = Infinity;
            let minRoomIndex = -1;

            for (let i = 0; i < n; i++) {
                const availTime = roomAvailabilityTime[i];
                if (availTime <= start) {
                    count[i]++;
                    roomAvailabilityTime[i] = end;
                    foundAvailableRoom = true;
                    break;
                }
                if (availTime < minAvailableTime) {
                    minAvailableTime = availTime;
                    minRoomIndex = i;
                }
            }
            if (!foundAvailableRoom) {
                count[minRoomIndex]++;
                roomAvailabilityTime[minRoomIndex] += duration;
            }
        }

        let maxIndex = 0;
        for (let i = 1; i < n; i++) {
            if (count[i] > count[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}
