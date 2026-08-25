class Solution {
    missingNumber(nums: number[]): number {
        const n = nums.length;
        let missing = n;
        for(let i = 0; i < n; i++){
            missing ^= i ^ nums[i];
        }
        return missing;
    }
}