class Solution {
    trap(height: number[]): number {
        if (height === null || height.length === 0) return 0;
        let res = 0;
        const n = height.length;
        const stack: number[] = [];
        for (let i = 0; i < n; i++) {
            while (
                stack.length !== 0 &&
                height[i] > height[stack[stack.length - 1]]
            ) {
                const bottomIndex: number = stack.pop()!;

                if (stack.length === 0) {
                    break;
                }

                let leftIndex = stack[stack.length - 1];
                let width = i - leftIndex - 1;
                let boundedHeight =
                    Math.min(height[i], height[leftIndex]) -
                    height[bottomIndex];

                res += width * boundedHeight;
            }

            stack.push(i);
        }
        return res;
    }
}
