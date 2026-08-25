class Solution {
    combinationSum(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        this.backtrack(0, target, nums, [], res);
        return res;
    }

    private backtrack(index: number, remain: number, nums: number[], curr: number[], res: number[][]): void{
        if(remain === 0){
            res.push([...curr]);
        }
        for(let i = index; i < nums.length; i++){
            if(nums[i] > remain) {
                break;
            }
            curr.push(nums[i]);
            this.backtrack(i, remain - nums[i], nums, curr, res);
            curr.pop();
        }
    }
}