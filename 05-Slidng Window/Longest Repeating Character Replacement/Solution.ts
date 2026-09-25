class Solution {
    characterReplacement(s: string, k: number): number {
        const n = s.length;
        const count: number[] = new Array(26).fill(0);
        let l = 0;
        let maxCount = 0;
        for (let r = 0; r < n; r++) {
            let p = s.charCodeAt(r) - "A".charCodeAt(0);
            count[p]++;
            maxCount = Math.max(maxCount, count[p]);
            if (r - l + 1 - maxCount > k) {
                count[s.charCodeAt(l) - "A".charCodeAt(0)]--;
                l++;
            }
        }
        return n - l;
    }
}
