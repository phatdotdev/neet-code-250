import java.util.ArrayList;
import java.util.List;

class Solution {
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        for (String str : strs) {
            sb.append(str.length()).append('-').append(str);
        }
        return sb.toString();
    }

    public List<String> decode(String str) {
        int i = 0;
        List<String> res = new ArrayList<>();
        while (i < str.length()) {
            int j = i;
            while (str.charAt(j) != '-') {
                j++;
            }
            int len = Integer.parseInt(str.substring(i, j));
            res.add(str.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}
