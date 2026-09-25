class Solution1 {
    topKFrequent(nums: number[], k: number): number[] {
        const res: number[] = new Array(k);
        const map = new Map<number, number>();
        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        const temp: number[] = new Array(map.size);
        let i = 0;
        for (const num of map.keys()) {
            temp[i++] = num;
        }
        temp.sort((a, b) => map.get(b)! - map.get(a)!);
        for (let j = 0; j < res.length; j++) {
            res[j] = temp[j];
        }
        return res;
    }
}

class Solution2 {
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        const arr = [...map.keys()];
        arr.sort((a, b) => map.get(b)! - map.get(a)!);

        return arr.slice(0, k);
    }
}

class Solution3 {
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        const bucket: number[][] = Array.from(
            { length: nums.length + 1 },
            () => [],
        );

        for (const [num, freq] of map) {
            bucket[freq].push(num);
        }

        const res: number[] = [];

        for (let freq = bucket.length - 1; freq >= 0; freq--) {
            for (const num of bucket[freq]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
