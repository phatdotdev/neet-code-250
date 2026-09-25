class Solution {

    class ListNode {
        int val;
        ListNode next;

        public ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head);
        int index = 0;
        ListNode n1 = null, n3 = dummy;
        while (index < left) {
            n1 = n3;
            n3 = n3.next;
            index++;
        }
        ListNode n2 = null, n4 = n3;
        while (index <= right) {
            ListNode next = n4.next;
            n4.next = n2;
            n2 = n4;
            n4 = next;
            index++;
        }
        n1.next = n2;
        n3.next = n4;
        return dummy.next;
    }
}

class Solution2 {

    class ListNode {
        int val;
        ListNode next;

        public ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head);
        ListNode prev = null;
        ListNode curr = dummy;
        for (int i = 0; i < left; i++) {
            prev = curr;
            curr = curr.next;
        }
        for (int i = 0; i < right - left; i++) {
            ListNode temp = curr.next;
            curr.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }
        return dummy.next;
    }
}