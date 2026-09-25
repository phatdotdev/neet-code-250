import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class StockSpanner {

        Deque<Integer> prices;
        Deque<Integer> spans;

        public StockSpanner() {
            this.prices = new ArrayDeque<>();
            this.spans = new ArrayDeque<>();
        }

        public int next(int price) {
            int span = 1;
            while (!prices.isEmpty() && prices.peek() <= price) {
                prices.pop();
                span += spans.pop();
            }
            prices.push(price);
            spans.push(span);
            return span;
        }
    }
}
