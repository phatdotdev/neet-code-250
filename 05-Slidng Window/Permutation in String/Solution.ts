class Solution {
    checkInclusion(s1: string, s2: string): boolean {
        const count1: number[] = new Array(26).fill(0);
        const count2: number[] = new Array(26).fill(0);

        function arraysEqual(arr1: number[], arr2: number[]): boolean {
            return JSON.stringify(arr1) === JSON.stringify(arr2);
        }

        const k = s1.length;
        for (const c of s1) {
            count1[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        let l = 0;
        const n = s2.length;
        for (let r = 0; r < n; r++) {
            if (r - l + 1 > k) {
                count2[s2.charCodeAt(l++) - "a".charCodeAt(0)]--;
            }
            count2[s2.charCodeAt(r) - "a".charCodeAt(0)]++;
            if (r - l + 1 == k) {
                if (arraysEqual(count1, count2)) {
                    return true;
                }
            }
        }
        return false;
    }
}
