import java.util.HashMap;
import java.util.Map;

class Solution {

    class LRUCache {

        class Node {
            int key;
            int val;
            Node prev;
            Node next;

            public Node(int key, int val) {
                this.key = key;
                this.val = val;
            }
        }

        private int k;
        private Node head;
        private Node tail;
        private Map<Integer, Node> map;

        public LRUCache(int capacity) {
            k = capacity;
            head = new Node(-1, -1);
            tail = new Node(-1, -1);
            head.next = tail;
            tail.prev = head;
            map = new HashMap<>();
        }

        public int get(int key) {
            if (!map.containsKey(key)) {
                return -1;
            }
            Node node = map.get(key);
            removeNode(node);
            insertAtHead(node);
            return node.val;
        }

        public void put(int key, int value) {
            if (map.containsKey(key)) {
                Node existingNode = map.get(key);
                existingNode.val = value;
                removeNode(existingNode);
                insertAtHead(existingNode);
                return;
            }
            if (map.size() == k) {
                Node lruNode = tail.prev;
                removeNode(lruNode);
                map.remove(lruNode.key);
            }
            Node newNode = new Node(key, value);
            insertAtHead(newNode);
            map.put(key, newNode);
        }

        private void removeNode(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        private void insertAtHead(Node node) {
            Node first = head.next;

            node.next = first;
            node.prev = head;

            head.next = node;
            first.prev = node;
        }
    }

}