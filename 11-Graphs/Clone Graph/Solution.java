import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    class Node {
        public int val;
        public List<Node> neighbors;

        public Node() {
            this.val = 0;
            this.neighbors = new ArrayList<>();
        }

        public Node(int _val) {
            this.val = _val;
            this.neighbors = new ArrayList<>();
        }

        public Node(int _val, ArrayList<Node> _neighbors) {
            this.val = _val;
            this.neighbors = _neighbors;
        }

    }

    public Node cloneGraph(Node node) {
        Map<Node, Node> map = new HashMap<>();
        return clone(node, map);
    }

    public Node clone(Node node, Map<Node, Node> map) {
        if (node == null) {
            return null;
        }
        if (map.containsKey(node)) {
            return map.get(node);
        }
        Node copyNode = new Node(node.val);

        map.put(node, copyNode);
        for (Node neighbor : node.neighbors) {
            copyNode.neighbors.add(clone(neighbor, map));
        }
        return copyNode;
    }

}
