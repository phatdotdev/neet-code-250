class Solution {
    longestDiverseString(a: number, b: number, c: number): string {
        const res: string[] = [];
        const count: number[] = [a, b, c];
        const char: string[] = ["a", "b", "c"];
        while (true) {
            const len = res.length;
            let index = -1;
            let maxCount = 0;
            for (let i = 0; i < 3; i++) {
                if (
                    len >= 2 &&
                    res[len - 1] !== char[i] &&
                    res[len - 2] == char[i]
                ) {
                    continue;
                }
                if (count[i] > maxCount) {
                    maxCount = count[i];
                    index = i;
                }
            }
            if (index === -1) {
                break;
            }
            res.push(String.fromCharCode(97 + index));
            count[index]--;
        }
        return res.join("");
    }
}
