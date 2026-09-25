class Solution {
    checkValidString(s: string): boolean {
        const openStack: number[] = [];
        const starStack: number[] = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                openStack.push(i);
            } else if (s[i] === "*") {
                starStack.push(i);
            } else {
                if (openStack.length > 0) {
                    openStack.pop();
                } else if (starStack.length > 0) {
                    starStack.pop();
                } else {
                    return false;
                }
            }
        }
        while (openStack.length > 0 && starStack.length > 0) {
            if (openStack.pop()! > starStack.pop()!) {
                return false;
            }
        }
        return openStack.length === 0;
    }
}
