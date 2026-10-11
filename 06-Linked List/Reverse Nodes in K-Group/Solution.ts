class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        if (head === null || k <= 1) {
            return head!;
        }

        const dummyHead: ListNode = new ListNode(0);
        dummyHead.next = head;

        let groupPrev = dummyHead;

        while (true) {
            const kthNode: ListNode = this.getKthNode(groupPrev, k);
            if (kthNode === null) {
                break;
            }

            const groupNext: ListNode = kthNode.next!;

            let prev: ListNode = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const nextTemp = curr?.next!;
                curr!.next = prev;
                prev = curr!;
                curr = nextTemp;
            }

            const groupStart = groupPrev.next;
            groupPrev.next = kthNode;
            groupPrev = groupStart!;
        }

        return dummyHead.next;
    }

    private getKthNode(startNode: ListNode, k: number): ListNode {
        while (startNode != null && k > 0) {
            startNode = startNode.next!;
            k--;
        }
        return startNode;
    }
}

class Solution2 {
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        function getKthNode(startNode: ListNode | null, k: number) {
            while (startNode != null && k > 0) {
                startNode = startNode.next;
                k--;
            }
            return startNode;
        }

        if (head === null || k <= 1) {
            return head!;
        }

        const dummyHead: ListNode = new ListNode(0);
        dummyHead.next = head;

        let groupPrev = dummyHead;
        while (true) {
            const kthNode: ListNode | null = getKthNode(groupPrev, k);
            if (kthNode == null) {
                break;
            }
            const groupNext = kthNode.next;

            let prev = groupPrev;
            let curr = groupPrev.next;
            while (curr != groupNext) {
                const nextTemp = curr!.next;
                curr!.next = prev;
                prev = curr!;
                curr = nextTemp;
            }

            const groupStart = groupPrev.next;
            groupPrev.next = kthNode;
            groupPrev = groupStart!;
        }

        return dummyHead.next;
    }
}
