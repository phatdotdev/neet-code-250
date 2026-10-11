import java.util.HashMap;
import java.util.Map;

class Solution {
    class LFUCache {

        class Node {
            int key, val, freq;
            Node prev, next;

            public Node(int key, int val) {
                this.key = key;
                this.val = val;
                this.freq = 1;
            }
        }

        class DoublyLinkedList {
            Node head, tail;
            int size;

            public DoublyLinkedList() {
                this.head = new Node(0, 0);
                this.tail = new Node(0, 0);

                this.head.next = this.tail;
                this.tail.prev = this.head;
                size = 0;
            }

            public void addFirst(Node node) {
                node.next = this.head.next;
                node.prev = this.head;

                this.head.next.prev = node;
                this.head.next = node;

                this.size++;
            }

            public void remove(Node node) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.size--;
            }

            public Node removeLast() {
                if (size > 0) {
                    Node last = tail.prev;
                    remove(last);
                    return last;
                }
                return null;
            }

        }

        private final int capacity;
        private int minFreq;
        private final Map<Integer, Node> keyToNode;
        private final Map<Integer, DoublyLinkedList> freqToList;

        public LFUCache(int capacity) {
            this.capacity = capacity;
            this.minFreq = 0;
            this.keyToNode = new HashMap<>();
            this.freqToList = new HashMap<>();
        }

        public int get(int key) {
            Node node = keyToNode.get(key);
            if (node == null) {
                return -1;
            }
            updateFreq(node);
            return node.val;
        }

        public void put(int key, int value) {
            if (capacity == 0) {
                return;
            }
            if (keyToNode.containsKey(key)) {
                Node node = keyToNode.get(key);
                node.val = value;
                updateFreq(node);
                return;
            }
            if (keyToNode.size() >= capacity) {
                DoublyLinkedList minList = freqToList.get(this.minFreq);
                Node evicted = minList.removeLast();
                if (evicted != null) {
                    keyToNode.remove(evicted.key);
                }
            }
            Node newNode = new Node(key, value);
            keyToNode.put(key, newNode);
            freqToList.computeIfAbsent(1, k -> new DoublyLinkedList()).addFirst(newNode);
            this.minFreq = 1;
        }

        private void updateFreq(Node node) {
            int oldFreq = node.freq;
            DoublyLinkedList oldList = freqToList.get(oldFreq);
            oldList.remove(node);
            if (oldFreq == this.minFreq && oldList.size == 0) {
                this.minFreq++;
            }
            node.freq++;
            freqToList.computeIfAbsent(node.freq, k -> new DoublyLinkedList()).addFirst(node);
        }
    }
}
