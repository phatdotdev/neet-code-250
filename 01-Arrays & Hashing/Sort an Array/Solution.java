import java.util.PriorityQueue;

class Solution {
    class Solution1 {

        public int[] sortArray(int[] nums) {
            heapSort(nums);
            return nums;
        }

        private void heapSort(int[] nums) {
            PriorityQueue<Integer> pq = new PriorityQueue<>();
            for (int num : nums) {
                pq.offer(num);
            }
            for (int i = 0; i < nums.length; i++) {
                nums[i] = pq.poll();
            }
        }
    }

    class Solution2 {

        public int[] sortArray(int[] nums) {
            quickSort(nums, 0, nums.length - 1);
            return nums;
        }

        private void quickSort(int[] nums, int low, int high) {
            if (low < high) {
                int pivotIndex = partition(nums, low, high);
                quickSort(nums, low, pivotIndex - 1);
                quickSort(nums, pivotIndex + 1, high);
            }
        }

        private int partition(int[] nums, int low, int high) {
            int pivot = nums[high];
            int i = low;
            for (int j = low; j < high; j++) {
                if (nums[j] <= pivot) {
                    swap(nums, i, j);
                    i++;
                }
            }
            swap(nums, i, high);
            return i;
        }

        private void swap(int[] nums, int i, int j) {
            int t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
    }

    class Solution3 {
        public int[] sortArray(int[] nums) {
            mergeSort(nums, new int[nums.length], 0, nums.length - 1);
            return nums;
        }

        private void mergeSort(int[] nums, int[] temp, int low, int high) {
            if (low == high) {
                return;
            }
            int mid = low + (high - low) / 2;
            mergeSort(nums, temp, low, mid);
            mergeSort(nums, temp, mid + 1, high);

            merge(nums, temp, low, mid, high);
        }

        private void merge(int[] nums, int[] temp, int low, int mid, int high) {
            int i = low;
            int j = mid + 1;
            int k = low;

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

            for (int x = low; x <= high; x++) {
                nums[x] = temp[x];
            }
        }
    }

    class Solution4 {
        public int[] sortArray(int[] nums) {
            bucketSort(nums);
            return nums;
        }

        private void bucketSort(int[] nums) {
            int min = nums[0];
            int max = nums[0];

            for (int num : nums) {
                min = Math.min(min, num);
                max = Math.max(max, num);
            }

            int[] count = new int[max - min + 1];
            for (int num : nums) {
                count[num - min]++;
            }

            int k = 0;
            for (int i = 0; i < count.length; i++) {
                while (count[i] > 0) {
                    nums[k++] = i + min;
                    count[i]--;
                }
            }
        }
    }
}