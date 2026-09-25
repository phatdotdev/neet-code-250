class TrieNode {
    children: TrieNode[];
    isWord: boolean;

    constructor() {
        this.children = new Array(26);
        this.isWord = false;
    }
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node: TrieNode = this.root;
        for (const c of word) {
            const idx = c.charCodeAt(0) - 97;
            if (!node.children[idx]) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        node.isWord = true;
    }

    search(word: string): boolean {
        function search(i: number, node: TrieNode): boolean {
            if (i === word.length) return node.isWord;
            const c = word[i];

            if (c === ".") {
                for (let j = 0; j < 26; j++) {
                    if (node.children[j]) {
                        if (search(i + 1, node.children[j])) return true;
                    }
                }
                return false;
            } else {
                const idx = c.charCodeAt(0) - 97;
                if (!node.children[idx]) {
                    return false;
                }
                return search(i + 1, node.children[idx]);
            }
        }
        return search(0, this.root);
    }
}
