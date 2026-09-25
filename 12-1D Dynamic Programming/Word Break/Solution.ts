class Solution {
    wordBreak(s: string, wordDict: string[]): boolean {
        const n = s.length;
        const cache: boolean[] = new Array(n + 1).fill(false);
        cache[0] = true;
        for (let i = 0; i < n; i++) {
            if (cache[i]) {
                for (const word of wordDict) {
                    const len = word.length;
                    if (s.substring(i, i + len) === word) {
                        cache[i + len] = true;
                    }
                }
            }
        }
        return cache[n];
    }
}
