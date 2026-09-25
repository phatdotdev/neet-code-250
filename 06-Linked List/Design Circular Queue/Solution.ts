class MyCircularQueue {
    private size: number;
    private queue: number[];
    private front: number;
    private rear: number;

    constructor(k: number) {
        this.queue = new Array(k).fill(-1);
        this.size = 0;
        this.front = 0;
        this.rear = -1;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.size++;
        this.rear = (this.rear + 1) % this.queue.length;
        this.queue[this.rear] = value;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.size--;
        this.front = (this.front + 1) % this.queue.length;
        return true;
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.front];
    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.rear];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.queue.length;
    }
}
