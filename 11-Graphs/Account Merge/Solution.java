
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, List<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            String firstEmail = account.get(1);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                graph.putIfAbsent(email, new ArrayList<>());
                emailToName.put(email, name);
                graph.get(firstEmail).add(email);
                graph.get(email).add(firstEmail);
            }
        }

        List<List<String>> res = new ArrayList<>();
        Set<String> visited = new HashSet<>();

        for (String email : graph.keySet()) {
            if (visited.contains(email)) {
                continue;
            }
            List<String> emails = new ArrayList<>();

            dfs(email, graph, visited, emails);
            Collections.sort(emails);
            emails.add(0, emailToName.get(email));
            res.add(emails);
        }
        return res;
    }

    private void dfs(
            String email,
            Map<String, List<String>> graph,
            Set<String> visited,
            List<String> emails) {
        visited.add(email);
        emails.add(email);
        for (String next : graph.get(email)) {
            if (!visited.contains(next)) {
                dfs(next, graph, visited, emails);
            }
        }
    }
}
/*
 * public List<List<String>> accountsMerge(List<List<String>> accounts) {
 * Map<String, List<String>> map = new HashMap<>();
 * for (List<String> account : accounts) {
 * String name = account.get(0);
 * List<String> emails = map.getOrDefault(name, new ArrayList<>());
 * for (int i = 1; i < account.size(); i++) {
 * emails.add(account.get(i));
 * }
 * map.put(name, emails);
 * }
 * List<List<String>> res = new ArrayList<>();
 * for (Map.Entry<String, List<String>> entry : map.entrySet()) {
 * String name = entry.getKey();
 * List<String> emails = entry.getValue();
 * emails.sort((a, b) -> a.compareTo(b));
 * emails.addFirst(name);
 * res.add(emails);
 * }
 * return res;
 * }
 */