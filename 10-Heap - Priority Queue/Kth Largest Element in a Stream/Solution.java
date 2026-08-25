class Solution {
    class KthLargest {

        private int k;
        private PriorityQueue<Integer> pq;

        public KthLargest(int k, int[] nums) {
            this.pq = new PriorityQueue();
            this.k = k;
            for (int num : nums) {
                this.add(num);
            }
        }

        public int add(int val) {
            this.pq.offer(val);
            if (this.pq.size() > k) {
                this.pq.poll();
            }
            return this.pq.peek();
        }
    }
}