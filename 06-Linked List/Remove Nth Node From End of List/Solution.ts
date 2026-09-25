class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (head === null) return head!;
        const dummy: ListNode = new ListNode(0, head);
        let fast: ListNode | null = dummy;
        while (n-- > 0) {
            fast = fast.next!;
        }
        let slow: ListNode | null = dummy;
        while (fast.next != null) {
            slow = slow.next!;
            fast = fast.next;
        }
        slow.next = slow.next!.next;
        return dummy.next!;
    }
}
