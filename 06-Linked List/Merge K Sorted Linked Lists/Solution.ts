class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeKLists(lists: ListNode[]): ListNode {
        if (lists === null || lists.length === 0) {
            return null!;
        }
        return this.divideAndMerge(lists, 0, lists.length - 1)!;
    }

    private divideAndMerge(
        lists: ListNode[],
        start: number,
        end: number,
    ): ListNode | null {
        if (start === end) {
            return lists[start];
        }
        if (start > end) {
            return null;
        }

        const mid = start + Math.floor((end - start) / 2);
        const leftSortedList = this.divideAndMerge(lists, start, mid);
        const rightSortedList = this.divideAndMerge(lists, mid + 1, end);

        return this.mergeTwoLists(leftSortedList, rightSortedList);
    }

    private mergeTwoLists(
        l1: ListNode | null,
        l2: ListNode | null,
    ): ListNode | null {
        const dummy: ListNode = new ListNode();
        let current: ListNode = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        if (l1 !== null) {
            current.next = l1;
        }
        if (l2 !== null) {
            current.next = l2;
        }
        return dummy.next;
    }
}
