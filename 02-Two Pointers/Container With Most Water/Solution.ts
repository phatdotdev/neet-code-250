class Solution {
    maxArea(heights: number[]): number {
        let maxArea = 0;
        let l = 0,
            r = heights.length - 1;
        while (l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
