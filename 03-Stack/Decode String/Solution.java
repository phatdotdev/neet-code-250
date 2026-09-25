
class Solution {
    public String decodeString(String s) {
        int n = s.length();
        return decode(s, 0, n - 1);
    }

    private String decode(String s, int l, int r) {
        StringBuilder sb = new StringBuilder();
        int d = 0;
        while (l <= r) {
            char ch = s.charAt(l);
            if (ch >= 'a' && ch <= 'z') {
                sb.append(ch);
                l++;
            } else if (ch >= '0' && ch <= '9') {
                d = d * 10 + (ch - '0');
                l++;
            } else if (ch == '[') {
                int k = 1;
                int j = l + 1;
                while (k > 0) {
                    if (s.charAt(j) == '[')
                        k++;
                    if (s.charAt(j) == ']') {
                        k--;
                    }
                    j++;
                }
                String innerDecoded = decode(s, l + 1, j - 2);
                sb.append(innerDecoded.repeat(d));
                d = 0;
                l = j;
            }
        }
        return sb.toString();
    }
}
