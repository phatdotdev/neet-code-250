class TrieNode {
    isWord: boolean = false;
    children: TrieNode[];

    constructor() {
        this.children = new Array(26);
    }
}

class PrefixTree {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
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
        let node = this.root;
        for (const c of word) {
            const idx = c.charCodeAt(0) - 97;
            if (!node.children[idx]) {
                return false;
            }
            node = node.children[idx];
        }
        return node.isWord;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const c of prefix) {
            const idx = c.charCodeAt(0) - 97;
            if (!node.children[idx]) {
                return false;
            }
            node = node.children[idx];
        }
        return true;
    }
}
