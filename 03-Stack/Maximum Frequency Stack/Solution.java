
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    class FreqStack {

        Map<Integer, Integer> freqMap;
        Map<Integer, List<Integer>> groupStack;
        int maxFreq;

        public FreqStack() {
            freqMap = new HashMap<>();
            groupStack = new HashMap<>();
            maxFreq = 0;
        }

        public void push(int val) {
            int freq = freqMap.getOrDefault(val, 0) + 1;
            maxFreq = Math.max(maxFreq, freq);
            freqMap.put(val, freq);
            groupStack.computeIfAbsent(freq, (k) -> new ArrayList<>()).add(val);
        }

        public int pop() {
            List<Integer> stack = groupStack.get(maxFreq);
            int val = stack.removeLast();
            freqMap.put(val, maxFreq - 1);

            if (stack.isEmpty()) {
                maxFreq--;
            }

            return val;
        }
    }
}
