class Solution {
    numDecodings(s: string): number {
        if (s.length === 0 || s[0] === "0") return 0;
        const n: number = s.length;
        let prev2 = 1;
        let prev1 = 1;
        for (let i = 1; i < n; i++) {
            let curr = 0;
            const oneDigit = s.charCodeAt(i) - 48;
            const twoDigits = (s.charCodeAt(i - 1) - 48) * 10 + oneDigit;
            if (oneDigit >= 1 && oneDigit <= 9) {
                curr += prev1;
            }
            if (twoDigits >= 10 && twoDigits <= 26) {
                curr += prev2;
            }
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
