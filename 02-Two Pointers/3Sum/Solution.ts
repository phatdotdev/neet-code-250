class Solution1 {
    threeSum(nums: number[]): number[][] {

        const n = nums.length;
        const res: number[][] = [];

        nums.sort((a, b) -> a - b);

        for(let i = 0; i < n - 2; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1, r = n - 1;
            while(l < r){
                const sum = nums[i] + nums[l] + nums[r];
                if(sum <= 0){
                    if(sum === 0){
                        res.push([nums[i], nums[l], nums[r]]);
                    }
                    while(l < r && nums[l + 1] === nums[l]){
                        l++;
                    }
                    l++;
                } else {
                    while(l < r && nums[r - 1] === nums[r]){
                        r--;
                    }
                    r--;
                }
            }
        }
        return res;
    }
}

class Solution2 {
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        nums.sort((a, b) => a - b);

        let n = nums.length;
        for(let i = 0; i < n - 2; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let l = i + 1;
            let r = n - 1;
            while(l < r){
                const sum = nums[i] + nums[l] + nums[r];
                if(sum < 0){
                    l++;
                } else if(sum > 0){
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l] == nums[l-1]){
                        l++;
                    }
                }
            }
        }
        return res;
    }
}