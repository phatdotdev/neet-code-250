class ListNode {
    val: number;
    next: ListNode | null;

    constructor() {
        this.val = 0;
        this.next = null;
    }
}

class Solution {
    hasCycle(head: ListNode | null): boolean {
        if(head == null) return false;
        let slow = head, fast = head;
        while(fast.next != null && fast.next.next != null){
            slow = slow.next!;
            fast = fast.next.next!;
            if(slow === fast){
                return true;
            }
        }
        return false;
    }
}