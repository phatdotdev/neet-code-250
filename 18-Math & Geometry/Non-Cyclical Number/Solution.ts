class Solution {
    isHappy(n: number): boolean {
        function getNext(n: number): number {
            let res = 0;
            while (n != 0) {
                res += (n % 10) * (n % 10);
                n = Math.floor(n / 10);
            }
            return res;
        }
        let l = n,
            f = getNext(n);
        while (f !== 1 && l !== f) {
            l = getNext(l);
            f = getNext(getNext(f));
        }
        return f === 1;
    }
}
