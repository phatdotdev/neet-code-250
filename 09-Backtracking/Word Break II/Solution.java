import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {
    class Solution1 {
        public List<String> wordBreak(String s, List<String> wordDict) {
            List<String> res = new ArrayList<>();
            backtrack(s, wordDict, 0, new ArrayList<>(), res);
            return res;
        }

        private void backtrack(String s, List<String> wordDict, int index, List<String> curr, List<String> res) {
            if (index == s.length()) {
                res.add(String.join(" ", curr.toArray(new String[0])));
            }
            for (String word : wordDict) {
                if (s.startsWith(word, index)) {
                    curr.add(word);
                    backtrack(s, wordDict, index + word.length(), curr, res);
                    curr.remove(curr.size() - 1);
                }
            }
        }
    }

    class Solution2 {
        public List<String> wordBreak(String s, List<String> wordDict) {
            Set<String> dict = new HashSet<>(wordDict);
            Map<Integer, List<String>> memo = new HashMap<>();
            return dfs(s, 0, dict, memo);
        }

        private List<String> dfs(String s, int start, Set<String> dict, Map<Integer, List<String>> memo) {
            if (memo.containsKey(start)) {
                return memo.get(start);
            }
            List<String> validSentences = new ArrayList<>();

            if (start == s.length()) {
                validSentences.add("");
                return validSentences;
            }

            for (int end = start + 1; end <= s.length(); end++) {
                String word = s.substring(start, end);
                if (dict.contains(word)) {
                    List<String> subSentences = dfs(s, end, dict, memo);
                    for (String sub : subSentences) {
                        if (sub.isEmpty()) {
                            validSentences.add(word);
                        } else {
                            validSentences.add(word + " " + sub);
                        }
                    }
                }
            }

            memo.put(start, validSentences);
            return validSentences;
        }
    }
}
