class Solution {
    removeElement(nums: number[], val: number){
        const n = nums.length;
        let k = 0;
        for(const num of nums){
            if(num !== val) {
                nums[k] = num;
                k++;
            }
        }
        return k;
    }
}