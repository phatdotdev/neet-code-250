class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummy = new ListNode(-1);
        let p = l1,
            q = l2,
            curr = dummy;
        let carry = 0;
        while (p !== null || q !== null || carry !== 0) {
            let sum = carry;
            if (p !== null) {
                sum += p.val;
                p = p.next;
            }
            if (q !== null) {
                sum += q.val;
                q = q.next;
            }
            curr.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            curr = curr.next;
        }
        return dummy.next!;
    }
}
