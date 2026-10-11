import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        Deque<Integer> deque = new ArrayDeque<>();
        int[] res = new int[n - k + 1];
        for (int i = 0; i < n; i++) {
            if (!deque.isEmpty() && deque.getFirst() <= i - k) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && nums[deque.getLast()] < nums[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
            if (i >= k - 1) {
                res[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        return res;
    }
}
