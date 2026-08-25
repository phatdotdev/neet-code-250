class Solution {
    public String addBinary(String a, String b) {
        int i1 = a.length() - 1, i2 = b.length() - 1;
        StringBuilder sb = new StringBuilder();
        int carry = 0;
        while (i1 >= 0 || i2 >= 0 || carry != 0) {
            int bitA = 0;
            int bitB = 0;
            if (i1 >= 0) {
                bitA = a.charAt(i1) - '0';
                i1--;
            }
            if (i2 >= 0) {
                bitB = b.charAt(i2) - '0';
                i2--;
            }
            int sum = bitA + bitB + carry;
            carry = 0;
            if (sum == 0) {
                sb.append('0');
            } else if (sum == 1) {
                sb.append('1');
            } else if (sum == 2) {
                sb.append('0');
                carry = 1;
            } else if (sum == 3) {
                sb.append('1');
                carry = 1;
            }
        }
        sb.reverse();
        return sb.toString();
    }
}
