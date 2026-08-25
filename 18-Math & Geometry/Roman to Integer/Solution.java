import java.util.HashMap;
import java.util.Map;

class Solution {
    public int romanToInt(String s) {
        int n = s.length();
        int res = 0;
        int prev = 0;
        Map<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);
        for (int i = n - 1; i >= 0; i--) {
            int num = roman.get(s.charAt(i));
            if (num < prev) {
                res -= num;
            } else {
                res += num;
            }
            prev = num;
        }
        return res;
    }
}
