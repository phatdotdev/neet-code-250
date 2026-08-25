class Solution {
    findJudge(n: number, trust: number[][]): number{
        const score: number[] = new Array(n + 1).fill(0);
        for(const [a, b] of trust){
            score[a] = -1;
            if(score[b] != -1) score[b]++;
        }
        for(let i = 1; i <= score.length; i++){
            if(n - 1 == score[i]){
                return i;
            }
        }
        return -1;
    }
}