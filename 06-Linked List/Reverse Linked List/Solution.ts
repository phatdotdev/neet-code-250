class ListNode {
    val: number;
    next: ListNode | null;

    constructor() {
        this.val = 0;
        this.next = null;
    }
}

class Solution {
     reverseList(head: ListNode | null): ListNode {
        let prev: ListNode | null = null;
        let curr: ListNode | null = head;

        while(curr !== null){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev!;
     }
}