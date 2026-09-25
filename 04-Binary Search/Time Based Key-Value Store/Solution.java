import java.util.HashMap;
import java.util.Map;

class Solution {

    class TimeMap {

        class Node {
            String value;
            int timestamp;
            Node next;

            Node(String value, int timestamp, Node next) {
                this.value = value;
                this.timestamp = timestamp;
                this.next = next;
            }
        }

        private Map<String, Node> map;

        public TimeMap() {
            this.map = new HashMap<String, Node>();
        }

        public void set(String key, String value, int timestamp) {
            Node next = map.getOrDefault(key, null);
            Node curr = new Node(value, timestamp, next);
            map.put(key, curr);
        }

        public String get(String key, int timestamp) {
            Node curr = map.getOrDefault(key, null);
            while (curr != null && curr.timestamp > timestamp) {
                curr = curr.next;
            }
            return curr == null ? "" : curr.value;
        }
    }

}
