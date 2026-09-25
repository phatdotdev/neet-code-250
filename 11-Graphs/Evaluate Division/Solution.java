import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, Integer> pos = new HashMap<>();
        for (List<String> equation : equations) {
            if (!pos.containsKey(equation.get(0))) {
                pos.put(equation.get(0), pos.size());
            }
            if (!pos.containsKey(equation.get(1))) {
                pos.put(equation.get(1), pos.size());
            }
        }
        int n = pos.size();
        double[][] graph = new double[n][n];

        for (int j = 0; j < n; j++) {
            graph[j][j] = 1.0;
        }

        int i = 0;
        for (List<String> equation : equations) {
            int u = pos.get(equation.get(0));
            int v = pos.get(equation.get(1));
            graph[u][v] = values[i];
            graph[v][u] = 1.0 / values[i];
            i++;
        }

        for (int k = 0; k < n; k++) {
            for (int u = 0; u < n; u++) {
                for (int v = 0; v < n; v++) {
                    if (graph[u][v] == 0 && graph[u][k] > 0 && graph[k][v] > 0) {
                        graph[u][v] = graph[u][k] * graph[k][v];
                    }
                }
            }
        }
        double[] res = new double[queries.size()];
        i = 0;
        for (List<String> query : queries) {
            String start = query.get(0);
            String end = query.get(1);
            if (pos.containsKey(start) && pos.containsKey(end)) {
                double val = graph[pos.get(start)][pos.get(end)];
                res[i] = (val > 0) ? val : -1.0;
            } else {
                res[i] = -1.0;
            }
            i++;
        }
        return res;
    }
}
