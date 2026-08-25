class MinHeap {
    private heap: number[] = [];

    size(): number {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    replaceRoot(val: number): void {
        this.heap[0] = val;
        this.bubbleDown();
    }

    private bubbleUp(): void {
        let i = this.heap.length - 1;
        while(i > 0){
            let parent = Math.floor((i - 1) / 2);
            if(this.heap[parent] < this.heap[i]){
                break;
            }
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    private bubbleDown(): void {
        let i = 0;
        const n = this.heap.length;
        while(true){
            let smallest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            
            if(left < n && this.heap[smallest] > this.heap[left]) smallest = left;
            if(right < n && this.heap[smallest] > this.heap[right]) smallest = right;

            if(smallest == i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

class KthLargest {
    private k: number;
    private heap: MinHeap;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MinHeap();
        for(let num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        if(this.heap.size() < this.k){
            this.heap.push(val);
        } else if(val > this.heap.peek()){
            this.heap.replaceRoot(val);
        }
        return this.heap.peek();
    }
}