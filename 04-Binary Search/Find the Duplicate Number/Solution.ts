class Solution {
    findDuplicate(nums: number[]): number {
        let slow = 0,
            fast = 0;
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        let slow2 = 0;
        while (slow2 !== slow) {
            slow2 = nums[slow2];
            slow = nums[slow];
        }
        return slow;
    }
}
