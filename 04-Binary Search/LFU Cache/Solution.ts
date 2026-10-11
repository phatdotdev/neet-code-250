class CacheNode {
    key: number;
    val: number;
    freq: number;
    next: CacheNode | null;
    prev: CacheNode | null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.freq = 1;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: CacheNode;
    tail: CacheNode;
    size: number;

    constructor() {
        this.head = new CacheNode(0, 0);
        this.tail = new CacheNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    addFirst(node: CacheNode): void {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next!.prev = node;
        this.head.next = node;

        this.size++;
    }

    remove(node: CacheNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        this.size--;
    }

    removeLast(): CacheNode {
        const last: CacheNode = this.tail.prev!;
        this.remove(last);
        return last;
    }
}

class LFUCache {
    private keyToNode: Map<number, CacheNode>;
    private freqToList: Map<number, DoublyLinkedList>;
    private capacity: number;
    private minFreq: number;

    constructor(capacity: number) {
        this.keyToNode = new Map();
        this.freqToList = new Map();
        this.capacity = capacity;
        this.minFreq = 0;
    }

    get(key: number): number {
        if (!this.keyToNode.has(key)) {
            return -1;
        }
        const node: CacheNode = this.keyToNode.get(key)!;
        this.updateFreq(node);
        return node.val;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) {
            return;
        }
        if (this.keyToNode.has(key)) {
            const node: CacheNode = this.keyToNode.get(key)!;
            node.val = value;
            this.updateFreq(node);
            return;
        }
        if (this.keyToNode.size >= this.capacity) {
            const minList: DoublyLinkedList = this.freqToList.get(
                this.minFreq,
            )!;
            const evicted: CacheNode = minList.removeLast();
            if (evicted !== null) {
                this.keyToNode.delete(evicted.key);
            }
        }
        const newNode: CacheNode = new CacheNode(key, value);
        this.keyToNode.set(key, newNode);
        if (!this.freqToList.has(1)) {
            this.freqToList.set(1, new DoublyLinkedList());
        }
        this.freqToList.get(1)?.addFirst(newNode);
        this.minFreq = 1;
    }

    private updateFreq(node: CacheNode): void {
        const oldFreq: number = node.freq;
        const oldList: DoublyLinkedList = this.freqToList.get(oldFreq)!;
        oldList.remove(node);
        if (oldFreq === this.minFreq && oldList.size === 0) {
            this.minFreq++;
        }

        node.freq++;
        if (!this.freqToList.has(node.freq)) {
            this.freqToList.set(node.freq, new DoublyLinkedList());
        }
        this.freqToList.get(node.freq)?.addFirst(node);
    }
}
