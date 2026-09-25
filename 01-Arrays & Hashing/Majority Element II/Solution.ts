class Solution {
    majorityElement(nums: number[]): number[] {
        const res: number[] = [];
        let candidate1 = 0;
        let candidate2 = 0;
        let count1 = 0;
        let count2 = 0;
        for (const num of nums) {
            if (num === candidate1) {
                count1++;
            } else if (num === candidate2) {
                count2++;
            } else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        for (const num of nums) {
            if (num === candidate1) {
                count1++;
            }
            if (num === candidate2) {
                count2++;
            }
        }
        if (count1 > Math.floor(nums.length / 3)) {
            res.push(candidate1);
        }
        if (count2 > Math.floor(nums.length / 3)) {
            res.push(candidate2);
        }
        return res;
    }
}
