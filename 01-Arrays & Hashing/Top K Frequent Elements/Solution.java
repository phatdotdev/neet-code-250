import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    class Solution1 {
        public int[] topKFrequent(int[] nums, int k) {
            Map<Integer, Integer> map = new HashMap<Integer, Integer>();
            for (int num : nums) {
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
            Integer[] arr = map.keySet().toArray(new Integer[0]);
            Arrays.sort(arr, (a, b) -> Integer.compare(map.get(b), map.get(a)));

            int[] res = new int[k];
            for (int i = 0; i < res.length; i++) {
                res[i] = arr[i];
            }
            return res;
        }
    }

    class Solution2 {
        public int[] topKFrequent(int[] nums, int k) {
            Map<Integer, Integer> map = new HashMap<>();
            for (int num : nums) {
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
            PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> Integer.compare(map.get(a), map.get(b)));
            for (int num : map.keySet()) {
                pq.offer(num);
                if (pq.size() > k) {
                    pq.poll();
                }
            }
            int[] res = new int[k];
            for (int i = 0; i < k; i++) {
                res[i] = pq.poll();
            }
            return res;
        }
    }

    class Solution3 {
        public int[] topKFrequent(int[] nums, int k) {
            List<Integer>[] freq = new ArrayList[nums.length + 1];

            Map<Integer, Integer> map = new HashMap<>();
            for (int num : nums) {
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
            for (int num : map.keySet()) {
                if (freq[map.get(num)] == null) {
                    freq[map.get(num)] = new ArrayList<>();
                }
                freq[map.get(num)].add(num);
            }
            int i = 0;
            int[] res = new int[k];
            for (int j = nums.length; j >= 0; j--) {
                if (freq[j] != null) {
                    for (int num : freq[j]) {
                        res[i++] = num;
                        if (i == k)
                            break;
                    }
                }
                if (i == k)
                    break;
            }
            return res;
        }
    }
}
