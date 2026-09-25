class Solution {
    multiply(num1: string, num2: string): string {
        num1 = num1.replace(/^0+/, "") || "0";
        num2 = num2.replace(/^0+/, "") || "0";

        if (num1 === "0" || num2 === "0") return "0";

        if (num1.length === 1 && num2.length === 1) {
            return (Number(num1) * Number(num2)).toString();
        }

        const len = Math.max(num1.length, num2.length);
        num1 = num1.padStart(len, "0");
        num2 = num2.padStart(len, "0");

        const m = Math.floor(len / 2);

        const a = num1.substring(0, len - m);
        const b = num1.substring(len - m);

        const c = num2.substring(0, len - m);
        const d = num2.substring(len - m);

        const z2 = this.multiply(a, c);
        const z0 = this.multiply(b, d);

        const s1 = this.add(a, b);
        const s2 = this.add(c, d);

        const z1c = this.multiply(s1, s2);
        const z1 = this.subtract(this.subtract(z1c, z2), z0);

        const term1 = z2 + "0".repeat(2 * m);
        const term2 = z1 + "0".repeat(m);

        return this.add(this.add(term1, term2), z0).replace(/^0+/, "") || "0";
    }

    add(num1: string, num2: string): string {
        const res: string[] = [];
        let i = num1.length - 1;
        let j = num2.length - 1;
        let carry = 0;
        while (i >= 0 || j >= 0 || carry > 0) {
            const d1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
            const d2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
            const sum = d1 + d2 + carry;
            res.push((sum % 10).toString());
            carry = Math.floor(sum / 10);
            i--;
            j--;
        }
        return res.reverse().join("") || "0";
    }

    subtract(num1: string, num2: string): string {
        const res: string[] = [];
        let i = num1.length - 1;
        let j = num2.length - 1;
        let borrow = 0;
        while (i >= 0) {
            let d1 = num1.charCodeAt(i) - 48 - borrow;
            let d2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
            if (d1 < d2) {
                d1 += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            res.push((d1 - d2).toString());
            i--;
            j--;
        }
        return res.reverse().join("").replace(/^0+/, "") || "0";
    }
}
