import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<Integer> partitionLabels(String s) {
        int n = s.length();
        int[] map = new int[26];
        Arrays.fill(map, -1);

        for (int i = n - 1; i >= 0; i--) {
            if (map[s.charAt(i) - 'a'] == -1) {
                map[s.charAt(i) - 'a'] = i;
            }
        }

        List<Integer> res = new ArrayList<>();

        int index = 0;
        int start = 0;

        while (index < n) {
            int end = start;
            while (index <= end) {
                end = Math.max(end, map[s.charAt(index) - 'a']);
                index++;
            }
            res.add(index - start);
            start = index;
        }
        return res;
    }
}
