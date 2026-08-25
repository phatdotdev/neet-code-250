class Solution1 {
    mySqrt(x: number): number {
        if(x === 0) return 0;
        let l = 1, r = x;
        let ans = 0;
        while(l <= r){
            let m = l + Math.floor((r - l) / 2);
            if(m * m === x){
                return m;
            } else if(m * m > x){
                r = m - 1;
            } else {
                ans = m;
                l = m + 1;
            }
        }
        return ans;
    }
}

class Solution2 {
    mySqrt(x: number): number {
        if(x === 0) return 0;
        let l = 1, r = x;
        while(l < r){
            let m = l + Math.ceil((r - l) / 2);
            if(m * m === x){
                return m;
            } else if(m * m > x) {
                r = m - 1;
            } else {
                l = m;
            }
        }
        return l;
    }
}