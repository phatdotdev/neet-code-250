class Solution1 {
    subsetXORSum(nums: number[]): number { 
        if(nums === null || nums.length === 0){
            return 0;
        }
        const res: number[] = [];
        this.backtrack(nums, 0, 0, res);
        let total = 0
        for(const xor of res){
            total += xor;
        }
        return total;
    }

    private backtrack(nums: number[], index: number, xor: number, res: number[]) {
        res.push(xor);
        for (let i = index; i < nums.length; i++) {
            this.backtrack(nums, i + 1, xor ^ nums[i], res);
        }
    }
}

class Solution {
    subsetXORSum(nums: number[]): number {
        if(nums === null || nums.length === 0) {
            return 0;
        }
        const res: number[] = [];
        this.backtrack(nums, 0, 0, res);
        let total = 0;
        for(let xor of res){
            total += xor;
        }
        return total;
    }

    private backtrack(nums: number[], index: number, xor: number, res: number[]){
        if(index === nums.length){
            res.push(xor);
            return;
        }
        this.backtrack(nums, index + 1, xor ^ nums[index], res);
        this.backtrack(nums, index + 1, xor, res);
    }
}