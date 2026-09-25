class TrieNode {
    children: TrieNode[];
    isWord: boolean = false;

    constructor() {
        this.children = new Array(26);
    }
}

class Solution {
    minExtraChar(s: string, dictionary: string[]): number {
        const n = s.length;
        const root = new TrieNode();

        function insert(word: string) {
            let node = root;
            for (const ch of word) {
                const idx = ch.charCodeAt(0) - 97;
                if (!node.children[idx]) {
                    node.children[idx] = new TrieNode();
                }
                node = node.children[idx];
            }
            node.isWord = true;
        }

        for (const word of dictionary) {
            insert(word);
        }

        const dp = new Array(n + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1] + 1;
            let node = root;
            for (let j = i; j < n; j++) {
                const idx = s.charCodeAt(j) - 97;
                if (!node.children[idx]) {
                    break;
                }
                node = node.children[idx];
                if (node.isWord) {
                    dp[i] = Math.min(dp[j + 1], dp[i]);
                }
            }
        }
        return dp[0];
    }
}
