
class Solution {
    class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        return mergeKListsInRange(lists, 0, lists.length - 1);
    }

    public ListNode mergeKListsInRange(ListNode[] lists, int i, int j) {
        if (i == j) {
            return lists[i];
        }
        if (i > j) {
            return null;
        }
        int mid = i + (j - i) / 2;
        ListNode left = mergeKListsInRange(lists, i, mid);
        ListNode right = mergeKListsInRange(lists, mid + 1, j);
        return mergeTwoLists(left, right);
    }

    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode();
        ListNode current = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        if (l1 != null) {
            current.next = l1;
        }
        if (l2 != null) {
            current.next = l2;
        }
        return dummy.next;
    }
}
