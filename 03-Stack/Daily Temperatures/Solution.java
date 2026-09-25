import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        List<Integer> st = new ArrayList<>();
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            while (!st.isEmpty() && temperatures[i] > temperatures[st.getLast()]) {
                result[st.getLast()] = i - st.getLast();
                st.remove(st.size() - 1);
            }
            st.add(i);
        }
        return result;
    }
}
