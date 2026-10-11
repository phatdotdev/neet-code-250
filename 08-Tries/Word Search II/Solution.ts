class TrieNode {
    children: (TrieNode | null)[] = new Array(26).fill(null);
    word: string | null = null;
}

class Solution {
    findWords(board: string[][], words: string[]): string[] {
        function build(words: string[]): TrieNode {
            const root: TrieNode = new TrieNode();
            for (const word of words) {
                let curr = root;
                for (let i = 0; i < word.length; i++) {
                    const j = word.charCodeAt(i) - 97;
                    if (curr.children[j] === null) {
                        curr.children[j] = new TrieNode();
                    }
                    curr = curr.children[j];
                }
                curr.word = word;
            }
            return root;
        }
        const root: TrieNode = build(words);
        const res: string[] = [];

        function dfs(r: number, c: number, node: TrieNode) {
            const ch: string = board[r][c];
            const nextNode: TrieNode | null =
                node.children[ch.charCodeAt(0) - 97];
            if (ch === "#" || nextNode === null) {
                return;
            }
            board[r][c] = "#";

            if (nextNode.word !== null) {
                res.push(nextNode.word);
                nextNode.word = null;
            }

            if (r > 0) dfs(r - 1, c, nextNode);
            if (r < board.length - 1) dfs(r + 1, c, nextNode);
            if (c > 0) dfs(r, c - 1, nextNode);
            if (c < board[0].length - 1) dfs(r, c + 1, nextNode);

            board[r][c] = ch;
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                dfs(r, c, root);
            }
        }

        return res;
    }
}
