class Solution {
    public int rob(int[] nums) {
        int n = nums.length;

        if (n == 1) {
            return nums[0];
        }

        int rob2 = nums[n - 1];
        int rob1 = 0;

        for (int i = 1; i < n - 1; i++) {
            int rob = Math.max(rob1, rob2 + nums[i]);
            rob2 = rob1;
            rob1 = rob;
        }

        rob2 = 0;
        rob1 = 0;
        for (int i = 0; i < n; i++) {
            int rob = Math.max(rob1, rob2 + nums[i]);
            rob2 = rob1;
            rob1 = rob;
        }

        int temp1 = rob1;

        return Math.max(temp1, rob1);
    }
}
