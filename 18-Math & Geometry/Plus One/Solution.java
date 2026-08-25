import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] plusOne(int[] digits) {
        List<Integer> nums = new ArrayList<>();
        int carry = 1;
        int i = digits.length - 1;
        while (i >= 0 || carry != 0) {
            int sum = carry;
            if (i >= 0) {
                sum += digits[i];
            }
            nums.add(sum % 10);
            carry = sum / 10;
            i--;
        }
        int n = nums.size();
        int[] res = new int[n];
        for (int j = 0; j < n; j++) {
            res[j] = nums.get(n - j - 1);
        }
        return res;
    }
}
