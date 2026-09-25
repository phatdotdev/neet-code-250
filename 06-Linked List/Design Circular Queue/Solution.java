class Solution {
    class MyCircularQueue {
        private int[] queue;
        private int size;
        private int front;
        private int rear;

        public MyCircularQueue(int k) {
            size = 0;
            front = 0;
            rear = -1;
            queue = new int[k];
        }

        public boolean enQueue(int value) {
            if (isFull()) {
                return false;
            }
            rear = (rear + 1) % queue.length;
            queue[rear] = value;
            size++;
            return true;
        }

        public boolean deQueue() {
            if (isEmpty()) {
                return false;
            }
            front = (front + 1) % queue.length;
            size--;
            return true;
        }

        public int Front() {
            if (isEmpty()) {
                return -1;
            }
            return queue[front];
        }

        public int Rear() {
            if (isEmpty()) {
                return -1;
            }
            return queue[rear];
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public boolean isFull() {
            return size == queue.length;
        }
    }
}
