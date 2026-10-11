interface MountainArray {
    get(index: number): number;
    length(): number;
}

class Solution {
    findInMountainArray(target: number, mountainArr: MountainArray): number {
        function findPeak(mountainArr: MountainArray): number {
            let left = 0;
            let right = mountainArr.length() - 1;
            while (left < right) {
                const mid = left + Math.floor((right - left) / 2);
                if (mountainArr.get(mid) > mountainArr.get(mid + 1)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
        const peak = findPeak(mountainArr);
        let left = 0;
        let right = peak;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (mountainArr.get(mid) === target) {
                return mid;
            } else if (mountainArr.get(mid) > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        left = peak + 1;
        right = mountainArr.length() - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (mountainArr.get(mid) === target) {
                return mid;
            } else if (mountainArr.get(mid) < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}
