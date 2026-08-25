class Solution {
    plusOne(digits: number[]): number[] {
        const res: number[] = [];

        let i = digits.length - 1;
        let carry = 1;
        while (i >= 0 || carry != 0) {
            let sum = carry;
            if (i >= 0) {
                sum += digits[i];
            }
            res.push(sum % 10);
            carry = Math.floor(sum / 10);
            i--;
        }

        res.reverse();
        return res;
    }
}
