class Solution {
    mergeTriplets(triplets: number[][], target: number[]): boolean {
        let x = false;
        let y = false;
        let z = false;
        for (const triplet of triplets) {
            if (x && y && z) {
                return true;
            }
            if (
                triplet[0] > target[0] ||
                triplet[1] > target[1] ||
                triplet[2] > target[2]
            ) {
                continue;
            }
            if (triplet[0] === target[0]) {
                x = true;
            }
            if (triplet[1] === target[1]) {
                y = true;
            }
            if (triplet[2] === target[2]) {
                z = true;
            }
        }
        return x && y && z;
    }
}
