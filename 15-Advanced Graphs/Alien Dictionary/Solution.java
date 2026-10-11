import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

class Solution {
    public String foreignDictionary(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();
        for (String word : words) {
            for (char ch : word.toCharArray()) {
                if (!graph.containsKey(ch)) {
                    graph.put(ch, new HashSet<>());
                    indegree.put(ch, 0);
                }
            }
        }

        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i];
            String word2 = words[i + 1];
            int minLen = Math.min(word1.length(), word2.length());

            boolean foundDifference = false;

            for (int j = 0; j < minLen; j++) {
                char char1 = word1.charAt(j);
                char char2 = word2.charAt(j);
                if (char1 != char2) {
                    if (!graph.get(char1).contains(char2)) {
                        graph.get(char1).add(char2);
                        indegree.put(char2, indegree.get(char2) + 1);
                    }
                    foundDifference = true;
                    break;
                }
            }

            if (!foundDifference && word1.length() > word2.length()) {
                return "";
            }
        }

        Queue<Character> queue = new LinkedList<>();
        for (char ch : indegree.keySet()) {
            if (indegree.get(ch) == 0) {
                queue.offer(ch);
            }
        }

        StringBuilder result = new StringBuilder();
        while (!queue.isEmpty()) {
            char ch = queue.poll();
            result.append(ch);
            for (char neighbor : graph.get(ch)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);
                if (indegree.get(neighbor) == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        if (result.length() != graph.size()) {
            return "";
        }
        return result.toString();
    }
}
