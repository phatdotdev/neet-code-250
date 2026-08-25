class Solution {
    containsNearbyDuplicate(nums: number[], k: number):boolean {
        let i = 0, j = 0;
        const set = new Set();
        for(const num of nums){
            if(set.has(num)){
                return true;
            }
            set.add(num);
            if(j - i + 1 > k){
                set.delete(nums[i]);
                i++;
            }
            j++;
        }
        return false;
    }
}