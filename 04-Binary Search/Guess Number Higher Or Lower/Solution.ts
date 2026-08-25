function guess(num: number){
    return -1;
}

class Solution {
    guessNumber(n: number): number{
        let l = 0, r = n;
        while(l < r){
            let pick = l + Math.floor((r - l) / 2);
            if(guess(pick) === 0){
                return pick;
            }
            else if(guess(pick) === -1){
                r = pick - 1;
            } else {
                l = pick + 1;
            }
        }
        return l;
    }
}