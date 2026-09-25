class Solution1 {
    sortArray(nums: number[]): number[] {
        function mergeSort(nums: number[], low: number, high: number) {
            if (low === high) {
                return;
            }
            const mid = low + Math.floor((high - low) / 2);
            mergeSort(nums, low, mid);
            mergeSort(nums, mid + 1, high);

            merge(nums, low, mid, high);
        }

        function merge(nums: number[], low: number, mid: number, high: number) {
            let i = low;
            let j = mid + 1;
            let k = low;
            const temp = new Array(nums.length);
            while (i <= mid && j <= high) {
                if (nums[i] <= nums[j]) {
                    temp[k++] = nums[i++];
                } else {
                    temp[k++] = nums[j++];
                }
            }
            while (i <= mid) {
                temp[k++] = nums[i++];
            }
            while (j <= high) {
                temp[k++] = nums[j++];
            }
            for (let x = low; x <= high; x++) {
                nums[x] = temp[x];
            }
        }

        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }
}

class Solution2 {
    sortArray(nums: number[]): number[] {
        function bucketSort(nums: number[]): void {
            let min = nums[0],
                max = nums[0];
            for (const num of nums) {
                min = Math.min(min, num);
                max = Math.max(max, num);
            }
            const count: number[] = new Array(max - min + 1).fill(0);
            for (const num of nums) {
                count[num - min]++;
            }
            let k = 0;
            for (let i = 0; i < count.length; i++) {
                while (count[i] > 0) {
                    nums[k++] = i + min;
                    count[i]--;
                }
            }
        }
        bucketSort(nums);
        return nums;
    }
}

class Solution3 {
    sortArray(nums: number[]): number[] {
        function quickSort(nums: number[], low: number, high: number) {
            function swap(nums: number[], i: number, j: number) {
                let t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }

            function partition(
                nums: number[],
                low: number,
                high: number,
            ): number {
                let i = low;
                const pivot = nums[high];
                for (let j = low; j < high; j++) {
                    if (nums[j] <= pivot) {
                        swap(nums, i, j);
                        i++;
                    }
                }
                swap(nums, i, high);
                return i;
            }

            if (low >= high) {
                return;
            }
            const pivotIndex = partition(nums, low, high);

            quickSort(nums, low, pivotIndex - 1);
            quickSort(nums, pivotIndex + 1, high);
        }
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }
}

class MinHeap {
    private nums: number[];

    constructor() {
        this.nums = [];
    }

    push(val: number) {
        this.nums.push(val);
        this.bubbleUp();
    }

    pop() {
        const val = this.nums[0];
        this.nums[0] = this.nums.pop()!;
        this.bubbleDown();
        return val;
    }

    private bubbleDown() {
        const n = this.nums.length;
        let i = 0;
        while (i < n) {
            let s = i,
                l = 2 * i + 1,
                r = 2 * i + 2;
            if (l < n && this.nums[s] > this.nums[l]) s = l;
            if (r < n && this.nums[s] > this.nums[r]) s = r;
            if (s === i) break;
            [this.nums[i], this.nums[s]] = [this.nums[s], this.nums[i]];
            i = s;
        }
    }

    private bubbleUp() {
        let i = this.nums.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.nums[i] < this.nums[p]) {
                [this.nums[i], this.nums[p]] = [this.nums[p], this.nums[i]];
                i = p;
            } else {
                break;
            }
        }
    }
}

class Solution4 {
    sortArray(nums: number[]): number[] {
        function heapSort(nums: number[]) {
            const heap = new MinHeap();
            for (const num of nums) {
                heap.push(num);
            }
            for (let i = 0; i < nums.length; i++) {
                nums[i] = heap.pop();
            }
        }
        heapSort(nums);
        return nums;
    }
}
