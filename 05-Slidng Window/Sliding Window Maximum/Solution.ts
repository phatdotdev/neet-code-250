class Deque {
    private nums: { [key: number]: number } = {};
    private frontIndex: number = 0;
    private rearIndex: number = 0;

    pushFront(num: number): void {
        this.frontIndex--;
        this.nums[this.frontIndex] = num;
    }

    pushBack(num: number): void {
        this.nums[this.rearIndex] = num;
        this.rearIndex++;
    }

    popFront(): number | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const num = this.nums[this.frontIndex];
        delete this.nums[this.frontIndex];
        this.frontIndex++;
        return num;
    }

    popRear(): number | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        this.rearIndex--;
        const num = this.nums[this.rearIndex];
        delete this.nums[this.rearIndex];
        return num;
    }

    peekFront(): number | undefined {
        return this.nums[this.frontIndex];
    }

    peekRear(): number | undefined {
        return this.nums[this.rearIndex - 1];
    }

    isEmpty(): boolean {
        return this.rearIndex - this.frontIndex === 0;
    }
    size(): number {
        return this.rearIndex - this.frontIndex;
    }
}

class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const n: number = nums.length;
        const res: number[] = new Array(n - k + 1);
        const deque = new Deque();
        for (let i = 0; i < n; i++) {
            if (!deque.isEmpty() && deque.peekFront()! <= i - k) {
                deque.popFront();
            }
            while (!deque.isEmpty() && nums[i] > nums[deque.peekRear()!]) {
                deque.popRear();
            }
            deque.pushBack(i);
            if (i >= k - 1) {
                res[i - k + 1] = nums[deque.peekFront()!];
            }
        }
        return res;
    }
}

class Solution2 {
    maxSlidingWindow(nums: number[], k: number) {
        const queue: number[] = [];
        let head = 0;
        const res: number[] = [];
        for (let r = 0; r < nums.length; r++) {
            if (queue.length > head && queue[head] <= r - k) {
                head++;
            }
            while (
                queue.length > head &&
                nums[queue[queue.length - 1]] < nums[r]
            ) {
                queue.pop();
            }

            queue.push(r);
            if (r >= k - 1) {
                res.push(nums[queue[head]]);
            }
        }
        return res;
    }
}
