import java.util.Arrays;
import java.util.Queue;
import java.util.Set;

class Solution {

    public int openLock(String[] deadpends, String target) {
        Set<String> dead = new HashSet(Arrays.asList(deadpends));
        if (dead.contains("0000")) {
            return -1;
        }

        Set<String> visited = new HashSet();
        visited.add("0000");
        Queue<String> curr = new ArrayDeque<>();
        curr.offer("0000");

        int count = 0;

        while (!curr.isEmpty()) {
            int size = curr.size();
            while (size-- > 0) {
                String lock = curr.poll();
                if (lock.equals(target)) {
                    return count;
                }
                for (String nextLock : nextLocks(lock)) {
                    if (!dead.contains(nextLock) && visited.add(nextLock)) {
                        curr.offer(nextLock);
                    }
                }
            }
            return -1;
        }

        return count;
    }

    private List<String> nextLocks(String lock) {
        List<String> result = new ArrayList();
        char[] nums = lock.toCharArray();
        for (int i = 0; i < 4; i++) {
            char original = nums[i];

            nums[i] = original == '9' ? '0' : (char) (original + 1);
            result.add(new String(nums));

            nums[i] = original == '0' ? '9' : (char) (original - 1);
            result.add(new String(nums));

            nums[i] = original;
        }
        return result;
    }
}