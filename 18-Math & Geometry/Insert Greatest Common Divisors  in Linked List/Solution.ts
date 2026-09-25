class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    insertGreatestCommonDivisors(head: ListNode | null): ListNode {
        function GCD(a: number, b: number): number {
            while (b != 0) {
                [a, b] = [b, a % b];
            }
            return a;
        }

        if (head === null) {
            return head!;
        }
        let curr = head;
        while (curr.next !== null) {
            const gcdNode = new ListNode(GCD(curr.val, curr.next.val));
            gcdNode.next = curr.next;
            curr.next = gcdNode;
            curr = gcdNode.next;
        }
        return head;
    }
}
