import java.util.ArrayList;
import java.util.List;

class Solution {
    class Solution1 {
        public List<Integer> findClosestElements(int[] arr, int k, int x) {
            List<Integer> res = new ArrayList<>();
            int n = arr.length;
            int l = 0;

            for (int r = k; r < n; r++) {
                if (arr[l] == arr[r] || Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
                    l++;
                } else {
                    break;
                }
            }

            for (int i = l; i < l + k; i++) {
                res.add(arr[i]);
            }
            return res;
        }
    }

    class Solution2 {
        public List<Integer> findClosestElements(int[] arr, int k, int x) {
            List<Integer> res = new ArrayList<>();
            int l = 0, r = arr.length - k;
            while (l < r) {
                int m = l + (r - l) / 2;
                if (x - arr[m] > arr[m + k] - x) {
                    l = m + 1;
                } else {
                    r = m;
                }
            }
            for (int i = l; i < l + k; i++) {
                res.add(arr[i]);
            }
            return res;
        }
    }
}
