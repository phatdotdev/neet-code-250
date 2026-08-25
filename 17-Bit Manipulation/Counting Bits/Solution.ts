class Solution {
    countBits(n: number): number[] {
        if(n === 0) return [0];
        if(n === 1) return [0, 1];
        const bits: number[] = new Array(n + 1);
        bits[1] = 1;
        for(let i = 2; i <= n; i++){
            bits[i] = bits[Math.floor(i / 2)] + (i % 2);
        }
        return bits;
    }
}