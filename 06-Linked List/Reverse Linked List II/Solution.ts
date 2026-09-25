class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseBetween(
        head: ListNode | null,
        left: number,
        right: number,
    ): ListNode {
        const dummy = new ListNode(0, head);
        let prev = dummy;
        for (let i = 0; i < left - 1; i++) {
            prev = prev.next!;
        }
        let curr = prev.next!;
        for (let i = 0; i < right - left; i++) {
            const temp = curr.next!;
            curr.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }
        return dummy.next!;
    }
}
