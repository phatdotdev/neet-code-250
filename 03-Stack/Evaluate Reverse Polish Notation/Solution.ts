class Solution {
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        for (const token of tokens) {
            if (token === "+" || token == "-" || token === "*" || token === "/") {
                const a = stack.pop()!;
                const b = stack.pop()!;
                if (token === "+") {
                    stack.push(a + b);
                } else if (token === "-") {
                    stack.push(b - a);
                } else if (token === "*") {
                    stack.push(a * b);
                } else {
                    stack.push(Math.trunc(b / a));
                }
            }
            else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop()!;
    }
}