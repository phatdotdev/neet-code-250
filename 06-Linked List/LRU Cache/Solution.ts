class ListNode {
    key: number;
    val: number;
    prev: ListNode | null = null;
    next: ListNode | null = null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    private head: ListNode;
    private tail: ListNode;
    private map: Map<number, ListNode>;
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(-1, -1);
        this.tail = new ListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            this.removeNode(node);
            this.moveToHead(node);
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const existingNode = this.map.get(key)!;
            existingNode.val = value;
            this.removeNode(existingNode);
            this.moveToHead(existingNode);
            return;
        }
        if (this.map.size === this.capacity) {
            const last = this.tail.prev!;
            this.removeNode(last);
            this.map.delete(last.key);
        }
        const newNode = new ListNode(key, value);
        this.map.set(key, newNode);
        this.moveToHead(newNode);
    }

    private removeNode(node: ListNode) {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
    }

    private moveToHead(node: ListNode) {
        const first = this.head.next!;

        node.prev = this.head;
        node.next = first;

        this.head.next = node;
        first.prev = node;
    }
}
