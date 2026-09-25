class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const arr: number[] = new Array(n).fill(0);
        const stack: number[] = [];

        for (let i = 0; i < n; i++) {
            const t = temperatures[i];
            while (
                stack.length > 0 &&
                t > temperatures[stack[stack.length - 1]]
            ) {
                const j = stack.pop()!;
                arr[j] = i - j;
            }
            stack.push(i);
        }

        return arr;
    }
}
