class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        int rob2 = nums[0];
        int skip2 = 0;
        int rob1 = nums[1];
        int skip1 = nums[0];

        int n = nums.length;
        for (int i = 2; i < n; i++) {
            int rob = nums[i] + Math.max(
                    Math.max(rob2, skip2),
                    skip1);
            int skip = Math.max(
                    Math.max(rob1, skip1),
                    Math.max(rob2, skip2));
            skip2 = skip1;
            rob2 = rob1;
            skip1 = skip;
            rob1 = rob;
        }
        return Math.max(
                Math.max(rob2, skip2), Math.max(rob1, skip1));
    }
}