import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public int largestRectangleArea(int[] heights) {
        int maxArea = 0;

        int n = heights.length;
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i <= n; i++) {
            int currentHeight = (i == n) ? 0 : heights[i];
            while (!stack.isEmpty() && heights[stack.peek()] > currentHeight) {
                int h = heights[stack.pop()];
                int w = stack.isEmpty() ? i : (i - stack.peek() - 1);
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }

        return maxArea;
    }
}