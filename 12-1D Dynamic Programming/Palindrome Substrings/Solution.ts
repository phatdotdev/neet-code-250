class Solution {
    countSubstrings(s: string) {
        const n = s.length;
        let count = 0;
        function expand(l: number, r: number): number {
            let count = 0;
            while (l >= 0 && r < n && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
            return count;
        }
        for (let i = 0; i < n; i++) {
            count += expand(i, i);
            count += expand(i, i + 1);
        }
        return count;
    }
}
