class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) return;
        let slow: ListNode = head,
            fast: ListNode = head;
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next!;
            fast = fast.next.next!;
        }
        let prev: ListNode | null = null;
        let curr: ListNode | null = slow.next;
        slow.next = null;
        while (curr != null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        let l1: ListNode = head;
        let l2: ListNode | null = prev;
        while (l2 != null) {
            const next1 = l1.next;
            const next2 = l2.next;

            l1.next = l2;
            l2.next = next1;

            l1 = next1!;
            l2 = next2;
        }
    }
}
