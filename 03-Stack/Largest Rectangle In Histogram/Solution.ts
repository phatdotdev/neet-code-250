class Solution {
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        let maxArea = 0;

        const stack: number[] = [];
        for (let i = 0; i <= n; i++) {
            const currentHeight = i === n ? 0 : heights[i];
            while (
                stack.length > 0 &&
                currentHeight < heights[stack[stack.length - 1]]
            ) {
                const h = heights[stack.pop()!];
                const w =
                    stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
