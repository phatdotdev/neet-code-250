class Solution1 {
    findClosestElements(arr: number[], k: number, x: number): number[] {
        const n = arr.length;
        let l = 0,
            r = n - 1;
        while (r - l + 1 > k) {
            if (Math.abs(x - arr[l]) > Math.abs(arr[r] - x)) {
                l++;
            } else {
                r--;
            }
        }
        return arr.slice(l, r + 1);
    }
}

class Solution2 {
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let l = 0,
            r = arr.length - k;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (x - arr[m] > arr[m + k] - x) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return arr.slice(l, l + k);
    }
}
