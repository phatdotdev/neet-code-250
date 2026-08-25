import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

class Solution {

    public boolean isValid(String s) {
        Deque<Character> st = new ArrayDeque<>();
        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                st.push(ch);
            }
            if (map.containsKey(ch)) {
                if (st.isEmpty() || st.pop() != map.get(ch)) {
                    return false;
                }
            }
        }
        return st.isEmpty();
    }
}
