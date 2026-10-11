class Heap<T> {
    private heap: T[] = [];
    constructor(private compare: (a: T, b: T) => boolean) {}

    size(): number {
        return this.heap.length;
    }

    peek(): T {
        return this.heap[0];
    }

    push(value: T): void {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[parent], this.heap[i])) {
                break;
            }
            [this.heap[i], this.heap[parent]] = [
                this.heap[parent],
                this.heap[i],
            ];
            i = parent;
        }
    }

    pop(): T {
        const root = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let i = 0;

            while (true) {
                let best = i;
                const left = i * 2 + 1;
                const right = i * 2 + 2;

                if (
                    left < this.heap.length &&
                    this.compare(this.heap[left], this.heap[best])
                ) {
                    best = left;
                }

                if (
                    right < this.heap.length &&
                    this.compare(this.heap[right], this.heap[best])
                ) {
                    best = right;
                }

                if (best === i) {
                    break;
                }

                [this.heap[i], this.heap[best]] = [
                    this.heap[best],
                    this.heap[i],
                ];

                i = best;
            }
        }
        return root;
    }
}

class MedianFinder {
    private minHeap = new Heap<number>((a, b) => a < b);
    private maxHeap = new Heap<number>((a, b) => a > b);

    constructor() {}

    addNum(num: number): void {
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
}
