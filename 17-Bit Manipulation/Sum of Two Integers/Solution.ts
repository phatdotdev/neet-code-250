class Solution {
    getSum(a: number, b: number): number {
        let ans = 0;
        let carry = 0;

        for (let shift = 0; shift < 32; shift++) {
            const bitA = a & 1;
            const bitB = b & 1;

            const sum = bitA ^ bitB ^ carry;

            if (sum !== 0) {
                ans |= 1 << shift;
            }

            carry = (bitA & bitB) | (bitA & carry) | (bitB & carry);

            a >>>= 1;
            b >>>= 1;
        }

        return ans;
    }
}

class Solution2 {
    getSum(a: number, b: number): number {
        while (b != 0) {
            const carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }
}
