class Solution {
    minWindow(s: string, t: string): string {
        if (s === null || t === null) {
            return "";
        }
        const targetCount = new Array(128).fill(0);
        for (let i = 0; i < t.length; i++) {
            targetCount[t.charCodeAt(i)]++;
        }

        let left = 0;
        let minLen = Infinity;
        let startIndex = 0;
        let requiredChars = t.length;

        for (let right = 0; right < s.length; right++) {
            const rightChar = s.charCodeAt(right);
            if (targetCount[rightChar] > 0) {
                requiredChars--;
            }
            targetCount[rightChar]--;

            while (requiredChars === 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    startIndex = left;
                }
                const leftChar = s.charCodeAt(left);
                targetCount[leftChar]++;
                if (targetCount[leftChar] > 0) {
                    requiredChars++;
                }
                left++;
            }
        }

        return minLen === Infinity
            ? ""
            : s.substring(startIndex, startIndex + minLen);
    }
}
