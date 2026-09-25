import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    class Solution1 {
        public int[] asteroidCollision(int[] asteroids) {
            Deque<Integer> stack = new ArrayDeque<>();
            for (int asteroid : asteroids) {
                if (asteroid > 0) {
                    stack.push(asteroid);
                } else {
                    while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() + asteroid < 0) {
                        stack.pop();
                    }
                    if (stack.isEmpty() || stack.peek() < 0) {
                        stack.push(asteroid);
                    } else if (stack.peek() + asteroid == 0) {
                        stack.pop();
                    }
                }
            }
            int[] res = new int[stack.size()];
            int i = stack.size() - 1;
            while (!stack.isEmpty()) {
                res[i--] = stack.pop();
            }
            return res;
        }
    }
}