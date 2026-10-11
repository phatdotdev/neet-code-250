class Solution {

    interface MountainArray {
        public int get(int index);

        public int length();
    }

    public int findInMountainArray(int target, MountainArray mountainArr) {
        int peak = findMountainPeak(mountainArr);

        int left = 0;
        int right = peak;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (mountainArr.get(mid) == target) {
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
            int mid = left + (right - left) / 2;
            if (mountainArr.get(mid) == target) {
                return mid;
            } else if (mountainArr.get(mid) > target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    private int findMountainPeak(MountainArray mountainArr) {
        int left = 0;
        int right = mountainArr.length() - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (mountainArr.get(mid) > mountainArr.get(mid + 1)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
