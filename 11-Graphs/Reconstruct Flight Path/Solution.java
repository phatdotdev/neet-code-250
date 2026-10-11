import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    Map<String, PriorityQueue<String>> graph = new HashMap<>();
    LinkedList<String> result = new LinkedList<>();

    public List<String> findItinerary(List<List<String>> tickets) {
        for (List<String> ticket : tickets) {
            graph.computeIfAbsent(ticket.get(0), k -> new PriorityQueue<>()).add(ticket.get(1));
        }
        dfs("JFK");
        return result;
    }

    private void dfs(String airport) {
        PriorityQueue<String> destinations = graph.get(airport);
        while (destinations != null && !destinations.isEmpty()) {
            String next = destinations.poll();
            dfs(next);
        }
        result.addFirst(airport);
    }
}
