class Solution {
    findMaximizedCapital(
        k: number,
        w: number,
        profits: number[],
        capital: number[],
    ) {
        let totalCapital = w;

        const n = capital.length;
        const projects: number[][] = Array.from({ length: n }, (_, i) => [
            capital[i],
            profits[i],
        ]);
        for (let i = 0; i < k; i++) {
            let p = -1;
            let profit = 0;
            for (let j = 0; j < n; j++) {
                if (
                    projects[j][0] !== -1 &&
                    projects[j][0] <= totalCapital &&
                    projects[j][1] > profit
                ) {
                    p = j;
                    profit = projects[j][1];
                }
            }
            if (p === -1) {
                break;
            }
            projects[p][0] = -1;
            totalCapital += projects[p][1];
        }
        return totalCapital;
    }
}

class Solution2 {
    findMaximizedCapital(
        k: number,
        w: number,
        profits: number[],
        capital: number[],
    ) {
        const n = profits.length;
        let W = w;

        const indices = Array.from({ length: n }, (_, i) => i);
        indices.sort((a, b) => capital[a] - capital[b]);

        for (let i = 0; i < k; i++) {
            let p = -1;
            let profit = 0;
            for (let j = 0; j < n; j++) {
                const index = indices[j];
                if (W < capital[indices[j]]) {
                    break;
                }
                if (capital[index] !== -1 && profits[index] > profit) {
                    p = index;
                    profit = profits[p];
                }
            }
            if (p === -1) {
                break;
            }
            W += profits[p];
            capital[p] = -1;
        }

        return W;
    }
}
