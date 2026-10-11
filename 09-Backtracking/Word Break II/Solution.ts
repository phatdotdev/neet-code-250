class Solution {
    wordBreak(s: string, wordDict: string[]): string[] {
        const dict: Set<string> = new Set(wordDict);
        const memo: Map<number, string[]> = new Map();

        function dfs(start: number): string[] {
            if (memo.has(start)) {
                return memo.get(start)!;
            }

            const validSentences: string[] = [];

            if (start === s.length) {
                validSentences.push("");
                return validSentences;
            }

            for (let end = start + 1; end <= s.length; end++) {
                const word: string = s.substring(start, end);
                if (dict.has(word)) {
                    const subSentences: string[] = dfs(end);

                    for (const sub of subSentences) {
                        if (!sub) {
                            validSentences.push(word);
                        } else {
                            validSentences.push(word + " " + sub);
                        }
                    }
                }
            }

            memo.set(start, validSentences);
            return validSentences;
        }

        return dfs(0);
    }
}
