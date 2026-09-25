class Solution {
    carPooling(trips: number[][], capacity: number): boolean {
        const passengerChange = new Array(1001).fill(0);
        for (const trip of trips) {
            passengerChange[trip[1]] += trip[0];
            passengerChange[trip[2]] -= trip[0];
        }
        let passenger = 0;
        for (const change of passengerChange) {
            passenger += change;
            if (passenger > capacity) {
                return false;
            }
        }
        return true;
    }
}
