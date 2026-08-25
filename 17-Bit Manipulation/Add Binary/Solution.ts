class Solution {
    addBinary(a: string, b:string): string {
        const res: string[] = [];
        let p1 = a.length - 1, p2 = b.length - 1;
        let carry = 0;
        while(p1 >= 0 || p2 >= 0 || carry != 0){
            let sum = carry;
            if(p1 >= 0){
                sum += a.charCodeAt(p1) - "0".charCodeAt(0);
                p1--;
            }
             if(p2 >= 0){
                sum += b.charCodeAt(p2) - "0".charCodeAt(0);
                p2--;
            }
            res.push(String(Math.floor(sum % 2)));
            carry = Math.floor(sum / 2);
        }
        res.reverse();
        return res.join("");
    }
}