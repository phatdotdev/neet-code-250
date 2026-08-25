import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    class MyQueue {

        private Deque<Integer> stackIn;
        private Deque<Integer> stackOut;

        public MyQueue() {
            stackIn = new ArrayDeque<>();
            stackOut = new ArrayDeque<>();
        }

        public void push(int x) {
            stackIn.push(x);
        }

        public int pop() {
            if (stackOut.isEmpty()) {
                while (!stackIn.isEmpty()) {
                    stackOut.push(stackIn.pop());
                }
            }
            return stackOut.pop();
        }

        public int peek() {
            if (stackOut.isEmpty()) {
                while (!stackIn.isEmpty()) {
                    stackOut.push(stackIn.pop());
                }
            }
            return stackOut.peek();
        }

        public boolean empty() {
            return stackIn.isEmpty() && stackOut.isEmpty();
        }

    }

}