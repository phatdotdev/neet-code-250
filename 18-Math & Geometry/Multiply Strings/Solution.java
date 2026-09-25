class Solution {
    public String multiply(String num1, String num2) {
        if (num1.equals("0") || num2.equals("0"))
            return "0";
        if (num1.length() == 1 && num2.length() == 1) {
            int p = (num1.charAt(0) - '0') * (num2.charAt(0) - '0');
            return String.valueOf(p);
        }
        int len = Math.max(num1.length(), num2.length());
        while (num1.length() < len) {
            num1 = "0" + num1;
        }
        while (num2.length() < len) {
            num2 = "0" + num2;
        }
        int m = len / 2;
        int mid = len - m;

        String a = num1.substring(0, m);
        String b = num1.substring(m);
        String c = num2.substring(0, m);
        String d = num2.substring(m);

        String ac = multiply(a, c);
        String ad = multiply(a, d);
        String bc = multiply(b, c);
        String bd = multiply(b, d);

        String acShifted = ac + "0".repeat(2 * mid);
        String adShifted = ad + "0".repeat(mid);
        String bcShifted = bc + "0".repeat(mid);

        String res = add(acShifted, adShifted);
        res = add(res, bcShifted);
        res = add(res, bd);

        int firstNonZero = 0;
        while (firstNonZero < res.length() - 1 && res.charAt(firstNonZero) == '0') {
            firstNonZero++;
        }

        return res.substring(firstNonZero);
    }

    private String add(String num1, String num2) {
        StringBuilder sb = new StringBuilder();

        int carry = 0;
        int i = num1.length() - 1;
        int j = num2.length() - 1;

        while (i >= 0 || j >= 0 || carry != 0) {
            int sum = carry;
            if (i >= 0) {
                sum += num1.charAt(i) - '0';
                i--;
            }
            if (j >= 0) {
                sum += num2.charAt(j) - '0';
                j--;
            }
            sb.append((char) (sum % 10 + '0'));
            carry = sum / 10;
        }

        return sb.reverse().toString();
    }
}