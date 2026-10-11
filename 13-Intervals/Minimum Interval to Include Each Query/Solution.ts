class Heap<T> {
    private heap: T[] = [];

    constructor(private compare: (a: T, b: T) => number) {}

    public size(): number {
        return this.heap.length;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public push(val: T): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    public pop(): T | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const lastIndex = this.heap.length - 1;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left <= lastIndex &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }
            if (
                right <= lastIndex &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
                smallest = right;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

class Solution {
    minInterval(intervals: number[][], queries: number[]): number[] {
        const n = intervals.length;
        const m = queries.length;

        intervals.sort((a, b) => a[0] - b[0]);

        const sortedQueries: number[][] = queries
            .map((query, index) => [query, index])
            .sort((a, b) => a[0] - b[0]);

        const minHeap = new Heap<[number, number]>((a, b) => a[0] - b[0]);

        const result: number[] = new Array(m).fill(-1);

        let i = 0;
        for (const [query, idx] of sortedQueries) {
            while (i < n && intervals[i][0] <= query) {
                const [start, end] = intervals[i];
                const duration = end - start + 1;
                minHeap.push([duration, end]);
                i++;
            }
            while (minHeap.size() > 0 && minHeap.peek()![1] < query) {
                minHeap.pop();
            }
            if (minHeap.size() > 0) {
                result[idx] = minHeap.peek()![0];
            }
        }

        return result;
    }
}
