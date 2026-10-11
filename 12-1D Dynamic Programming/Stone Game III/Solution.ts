class Solution {
    stoneGameIII(stoneValues: number[]): string {
        const totalStones: number = stoneValues.length;
        const maxScoreDiff: number[] = new Array(totalStones + 1).fill(0);

        for (let startIndex = totalStones - 1; startIndex >= 0; startIndex--) {
            maxScoreDiff[startIndex] = -Infinity;
            let currentTakeSum = 0;

            for (
                let takeCount = 1;
                takeCount <= 3 && startIndex + takeCount <= totalStones;
                takeCount++
            ) {
                const currentStoneIndex = startIndex + takeCount - 1;
                currentTakeSum += stoneValues[currentStoneIndex];

                const currentOptionDiff =
                    currentTakeSum - maxScoreDiff[startIndex + takeCount];
                maxScoreDiff[startIndex] = Math.max(
                    maxScoreDiff[startIndex],
                    currentOptionDiff,
                );
            }
        }

        const aliceFinalMargin = maxScoreDiff[0];

        if (aliceFinalMargin > 0) return "Alice";
        if (aliceFinalMargin < 0) return "Bob";
        return "Tie";
    }
}
