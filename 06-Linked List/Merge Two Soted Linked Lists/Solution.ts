class ListNode {
    val: number;
    next: ListNode | null;

    constructor() {
        this.val = 0;
        this.next = null;
    }
}

class Solution {
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode();
        let curr = dummy;
        while(list1 != null && list2 != null){
            if(list1.val <= list2.val){
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next!;
        }
        if(list1 != null){
            curr.next = list1;
        }
        if(list2 != null){
            curr.next = list2;
        }
        return dummy.next!;
    }
}