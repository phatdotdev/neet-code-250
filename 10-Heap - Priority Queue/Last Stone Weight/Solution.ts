class MaxHeap {
    private heap: number[];

    constructor(){
        this.heap = [];
    }

    size(): number {
        return this.heap.length;
    }

    push(num: number): void {
        this.heap.push(num);
        this.bubbleUp();
    }

    pop(): number {
        let num = this.heap[0];
        let last = this.heap[this.heap.length - 1];

        this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = last;
            this.bubbleDown();
        }

        return num;
    }

    private bubbleUp(): void {
        let i = this.heap.length - 1;
        while(i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if(this.heap[i] > this.heap[parent]){
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            } else {
                break;
            }
            i = parent;
        }
    }

    private bubbleDown(): void {
        const n = this.heap.length;
        let i = 0;
        while(2 * i + 1 < n){
            let biggest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            if(left < n && this.heap[biggest] < this.heap[left]) biggest = left;
            if(right < n && this.heap[biggest] < this.heap[right]) biggest = right;
            if(biggest === i) break;
            [this.heap[i], this.heap[biggest]] = [this.heap[biggest], this.heap[i]];
            i = biggest;
        }
    }
}

class Solution {
    lastStoneWeight(stones: number[]): number{
        const heap = new MaxHeap();
        for(let stone of stones) {
            heap.push(stone);
        }
        while(heap.size() > 1){
            let a = heap.pop(), b = heap.pop();
            heap.push(a - b);
        }
        return heap.pop();
    }
}