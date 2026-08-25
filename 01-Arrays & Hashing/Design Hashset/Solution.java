import java.util.LinkedList;
import java.util.List;

class Solution {

    class Solution1 {
        class MyHashSet {

            private final int size = 1000001;
            private boolean[] keys;

            public MyHashSet() {
                keys = new boolean[size];
            }

            public void add(int key) {
                keys[key] = true;
            }

            public void remove(int key) {
                keys[key] = false;
            }

            public boolean contains(int key) {
                return keys[key];
            }
        }
    }

    class Solution2 {
        class MyHashSet {
            private final int size = 1009;
            private List<Integer>[] set;

            public MyHashSet() {
                set = new LinkedList[size];
                for (int i = 0; i < size; i++) {
                    set[i] = new LinkedList<Integer>();
                }
            }

            public void add(int key) {
                if (contains(key)) {
                    return;
                }
                set[key % size].add(Integer.valueOf(key));
            }

            public void remove(int key) {
                if (!contains(key)) {
                    return;
                }
                set[key % size].remove(key);
            }

            public boolean contains(int key) {
                return set[key % size].contains(key);
            }
        }
    }

}
