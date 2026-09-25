class Solution {
    class Solution1 {
        public int maxTurbulenceSize(int[] arr) {
            int n = arr.length;
            if (n < 2) {
                return n;
            }

            int len = arr[0] == arr[1] ? 1 : 2;
            int maxLen = len;
            boolean prev = arr[0] < arr[1];
            for (int i = 2; i < n; i++) {
                boolean curr = arr[i - 1] < arr[i];
                if (arr[i - 1] == arr[i]) {
                    len = 1;
                } else if (curr != prev) {
                    len++;
                } else {
                    len = 2;
                }
                maxLen = Math.max(maxLen, len);
                prev = curr;
            }
            return maxLen;
        }
    }

    class Solution2 {
        public int maxTurbulenceSize(int[] arr) {
            int n = arr.length;
            if (n < 2) {
                return n;
            }
            int up = 1;
            int down = 1;
            int maxLen = 0;
            for (int i = 1; i < n; i++) {
                if (arr[i] > arr[i - 1]) {
                    up = down + 1;
                    down = 1;
                } else if (arr[i] < arr[i - 1]) {
                    down = up + 1;
                    up = 1;
                } else {
                    up = 1;
                    down = 1;
                }
                maxLen = Math.max(maxLen, Math.max(up, down));
            }
            return maxLen;
        }
    }
}
