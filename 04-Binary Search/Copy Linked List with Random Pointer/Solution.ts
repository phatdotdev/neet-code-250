/// <reference no-default-lib="true"/>

class Node {
    val: number;
    next: Node | null;
    random: Node | null;

    constructor(val?: number, next?: Node | null, random?: Node | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

class Solution1 {
    copyRandomList(head: Node | null): Node {
        if (head === null) return head!;
        let curr: Node | null = head;
        while (curr !== null) {
            const temp: Node | null = curr.next;
            curr.next = new Node(curr.val);
            curr.next.next = temp;
            curr = temp;
        }
        curr = head;
        while (curr !== null) {
            const temp: Node | null = curr.next!.next;
            if (curr.random != null) {
                curr.next!.random = curr.random.next;
            }
            curr = temp;
        }
        curr = head;
        const copyList = head.next;
        while (curr !== null) {
            const temp: Node = curr.next!;
            curr.next = temp.next;
            if (curr.next != null) {
                temp.next = curr.next!.next;
            }
            curr = curr.next;
        }
        return copyList!;
    }
}

class Solution2 {}
