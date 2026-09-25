class Solution1 {
    decodeString(s: string): string {
        const countStack: number[] = [];
        const sbStack: string[][] = [];
        let currString: string[] = [];
        let k = 0;
        for (const c of s) {
            if (c >= "0" && c <= "9") {
                k = k * 10 + c.charCodeAt(0) - "0".charCodeAt(0);
            } else if (c === "[") {
                countStack.push(k);
                sbStack.push(currString);
                k = 0;
                currString = [];
            } else if (c === "]") {
                const currK = countStack.pop()!;
                const decodedString = sbStack.pop()!;
                decodedString.push(currString.join("").repeat(currK));
                currString = decodedString;
            } else {
                currString.push(c);
            }
        }

        return currString.join("");
    }
}

class Solution2 {
    decodeString(s: string): string {
        let currentString = "";
        let currentK = 0;
        const countStack: number[] = [];
        const stringStack: string[] = [];

        for (const c of s) {
            if (c >= "0" && c <= "9") {
                currentK = currentK * 10 + c.charCodeAt(0) - "0".charCodeAt(0);
            } else if (c === "[") {
                countStack.push(currentK);
                stringStack.push(currentString);
                currentK = 0;
                currentString = "";
            } else if (c === "]") {
                const k = countStack.pop()!;
                const decodedString = stringStack.pop();
                currentString = decodedString + currentString.repeat(k);
            } else {
                currentString += c;
            }
        }

        return currentString;
    }
}
