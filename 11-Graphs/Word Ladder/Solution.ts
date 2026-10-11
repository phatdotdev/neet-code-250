class Solution {
    ladderLength(
        beginWord: string,
        endWord: string,
        wordList: string[],
    ): number {
        const wordSet: Set<string> = new Set(wordList);
        if (!wordSet.has(endWord)) {
            return 0;
        }
        let beginSet: Set<string> = new Set([beginWord]);
        let endSet: Set<string> = new Set([endWord]);
        wordSet.delete(beginWord);
        wordSet.delete(endWord);
        let level = 1;
        while (beginSet.size > 0 && endSet.size > 0) {
            if (beginSet.size > endSet.size) {
                [beginSet, endSet] = [endSet, beginSet];
            }
            const nextLevelSet: Set<string> = new Set();
            for (const word of beginSet) {
                const charArray = word.split("");
                for (let i = 0; i < charArray.length; i++) {
                    const oldChar = charArray[i];
                    for (let code = 97; code <= 122; code++) {
                        const newChar = String.fromCharCode(code);
                        charArray[i] = newChar;
                        if (newChar === oldChar) continue;
                        const newWord = charArray.join("");
                        if (endSet.has(newWord)) {
                            return level + 1;
                        }
                        if (wordSet.has(newWord)) {
                            nextLevelSet.add(newWord);
                            wordSet.delete(newWord);
                        }
                    }
                    charArray[i] = oldChar;
                }
            }
            beginSet = nextLevelSet;
            level++;
        }

        return 0;
    }
}
