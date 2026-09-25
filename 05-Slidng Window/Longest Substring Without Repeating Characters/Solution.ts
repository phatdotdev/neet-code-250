class Solution {
    lengthOfLongestSubstring(s: string): number {
        const pos: number[] = new Array(256).fill(-1);
        let maxLen = 0;
        const n = s.length;
        let l = 0;
        for (let r = 0; r < n; r++) {
            const c = s.charCodeAt(r);
            if (pos[c] >= l) {
                l = pos[c] + 1;
            }
            maxLen = Math.max(maxLen, r - l + 1);
            pos[c] = r;
        }
        return maxLen;
    }
}
