class Solution {
    reorganizeString(s: string): string {
        const n = s.length;
        const count: number[] = new Array(26).fill(0);

        let maxCount = 0;
        let maxCharIdx = 0;

        for (const c of s) {
            const idx = c.charCodeAt(0) - 97;
            count[idx]++;
            if (count[idx] > maxCount) {
                maxCount = count[idx];
                maxCharIdx = idx;
            }
        }

        if (maxCount > Math.floor((n + 1) / 2)) {
            return "";
        }

        const res: string[] = new Array(n);
        let idx = 0;
        while (count[maxCharIdx] > 0) {
            res[idx] = String.fromCharCode(97 + maxCharIdx);
            idx += 2;
            count[maxCharIdx]--;
        }

        for (let k = 0; k < 26; k++) {
            while (count[k] > 0) {
                if (idx >= n) {
                    idx = 1;
                }
                res[idx] = String.fromCharCode(97 + k);
                idx += 2;
                count[k]--;
            }
        }

        return res.join("");
    }
}
