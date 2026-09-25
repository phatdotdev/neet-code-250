class Solution {
    letterCombinations(digits: string): string[] {
        const LETTERS = [
            "abc",
            "def",
            "ghi",
            "jkl",
            "mno",
            "pqrs",
            "tuv",
            "wxyz",
        ];

        const n = digits.length;
        const res: string[] = [];
        const curr: string[] = [];
        if (digits.length === 0) {
            return res;
        }
        function generate(i: number): void {
            if (i === n) {
                res.push(curr.join(""));
                return;
            }
            const idx = digits.charCodeAt(i) - "2".charCodeAt(0);
            for (const c of LETTERS[idx]) {
                curr.push(c);
                generate(i + 1);
                curr.pop();
            }
        }
        generate(0);
        return res;
    }
}
