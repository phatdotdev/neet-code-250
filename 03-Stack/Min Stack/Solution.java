import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class MinStack {
        class Block {
            int val;
            int min;

            public Block(int val, int min) {
                this.val = val;
                this.min = min;
            }
        }

        Deque<Block> st;

        public MinStack() {
            this.st = new ArrayDeque<>();
        }

        public void push(int val) {
            int min = val;
            if (!this.st.isEmpty()) {
                min = Math.min(min, this.st.peek().min);
            }
            this.st.push(new Block(val, min));
        }

        public void pop() {
            this.st.pop();
        }

        public int top() {
            return this.st.peek().val;
        }

        public int getMin() {
            return this.st.peek().min;
        }
    }

}
