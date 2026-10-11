import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class ListNode {
        int val;
        ListNode next;

    }

    class Solution1 {
        public ListNode reverseKGroup(ListNode head, int k) {
            if (head == null) {
                return null;
            }
            Deque<ListNode> stack = new ArrayDeque<>();
            ListNode current = head;
            while (stack.size() < k && current != null) {
                stack.push(current);
                current = current.next;
            }
            if (stack.size() < k) {
                return head;
            }
            ListNode nextGroup = current;
            ListNode dummy = new ListNode();
            current = dummy;
            while (!stack.isEmpty()) {
                current.next = stack.pop();
                current = current.next;
            }
            current.next = reverseKGroup(nextGroup, k);
            return dummy.next;
        }
    }

    class Solution2 {
        public ListNode reverseKGroup(ListNode head, int k) {
            if (head == null || k <= 1) {
                return head;
            }

            ListNode dummyHead = new ListNode();
            dummyHead.next = head;

            ListNode groupPrev = dummyHead;
            while (true) {
                ListNode kthNode = getKthNode(groupPrev, k);
                if (kthNode == null) {
                    break;
                }
                ListNode groupNext = kthNode.next;
                ListNode prev = groupNext;
                ListNode curr = groupPrev.next;
                while (curr != groupNext) {
                    ListNode nextTemp = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = nextTemp;
                }
                ListNode groupStart = groupPrev.next;
                groupPrev.next = kthNode;
                groupPrev = groupStart;
            }

            return dummyHead.next;
        }

        private ListNode getKthNode(ListNode startNode, int k) {
            while (startNode != null && k > 0) {
                startNode = startNode.next;
                k--;
            }
            return startNode;
        }
    }
}
