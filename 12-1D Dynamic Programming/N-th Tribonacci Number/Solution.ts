class Solution {
    tribonacci(n: number): number {
        if(n <= 1) {
            return n;
        }
        if(n == 2){
            return 1;
        }
        let a = 0;
        let b = 1;
        let c = 1;
        for(let i = 3; i <= n; i++){
            let d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        return c;
    }
}