class Solution {
    class MyHashMap {

        int size = 1000001;
        Integer[] map;

        public MyHashMap() {
            map = new Integer[size];
        }

        public void put(int key, int value) {
            map[key] = Integer.valueOf(value);
        }

        public int get(int key) {
            return map[key] != null ? map[key] : -1;
        }

        public void remove(int key) {
            map[key] = null;
        }

    }
}
