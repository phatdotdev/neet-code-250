class Heap<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(fn: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = fn;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    size(): number {
        return this.heap.length;
    }

    push(val: T): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        const val = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return val;
    }

    private bubbleUp(): void {
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[i], this.heap[p]) < 0) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                i = p;
            } else {
                break;
            }
        }
    }
    private bubbleDown(): void {
        const n = this.heap.length;
        let i = 0;
        while (i * 2 + 1 < n) {
            let m = i;
            if (
                i * 2 + 1 < n &&
                this.compare(this.heap[m], this.heap[i * 2 + 1]) > 0
            ) {
                m = i * 2 + 1;
            }
            if (
                i * 2 + 2 < n &&
                this.compare(this.heap[m], this.heap[i * 2 + 2]) > 0
            ) {
                m = i * 2 + 2;
            }
            if (m === i) break;
            else {
                [this.heap[i], this.heap[m]] = [this.heap[m], this.heap[i]];
                i = m;
            }
        }
    }
}

class Solution {
    getOrder(tasks: number[][]): number[] {
        const n = tasks.length;
        const extTasks = tasks.map((task, idx) => [task[0], task[1], idx]);
        extTasks.sort((a, b) => a[0] - b[0]);

        const res: number[] = new Array(n);

        let taskIdx = 0;
        let resIdx = 0;
        let currTime = 0;

        const heap = new Heap<number[]>((a, b) => {
            if (a[1] !== b[1]) {
                return a[1] - b[1];
            }
            return a[2] - b[2];
        });
        while (resIdx < n) {
            if (
                taskIdx < n &&
                heap.isEmpty() &&
                extTasks[taskIdx][0] > currTime
            ) {
                currTime = extTasks[taskIdx][0];
            }
            while (taskIdx < n && currTime >= extTasks[taskIdx][0]) {
                heap.push(extTasks[taskIdx]);
                taskIdx++;
            }
            const task = heap.pop()!;
            currTime += task[1];
            res[resIdx++] = task[2];
        }

        return res;
    }
}
