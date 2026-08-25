class Solution {
    majorityElement(nums: number[]): number {
        let candidate = nums[0];
        let count = 1;
        for(let i = 1; i < nums.length; i++){
            if(candidate == nums[i]){
                count++;
            } else {
                if(count > 0){
                    count--;
                } else {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
    }
}