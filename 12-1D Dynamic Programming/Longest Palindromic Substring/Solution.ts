class Solution1 {
    longestPalindrome(s: string): string {
        return this.manacher(s);
    }

    private manacher(s: string): string {
        if (!s || s.length === 0) return "";

        const fs = "^#" + s.split("").join("#") + "#$";
        const len = fs.length;

        const P = Array(len).fill(0);
        let C = 0;
        let R = 0;

        for (let i = 0; i < len; i++) {
            const mirror = 2 * i - C;
            if (R > i) {
                P[i] = Math.min(P[mirror], R - i);
            } else {
                P[i] = 0;
            }

            while (
                i - P[i] - 1 >= 0 &&
                i + P[i] + 1 < len &&
                fs[i - P[i] - 1] === fs[i + P[i] + 1]
            ) {
                P[i]++;
            }

            if (P[i] + i > R) {
                R = P[i] + i;
                C = i;
            }
        }
        let maxLen = 0;
        let centerIndex = 0;
        for (let i = 0; i < len - 1; i++) {
            if (P[i] > maxLen) {
                maxLen = P[i];
                centerIndex = i;
            }
        }

        const start = Math.floor((centerIndex - maxLen) / 2);
        return s.substring(start, start + maxLen);
    }
}

class Solution2 {
    longestPalindrome(s: string): string {
        return this.manacher(s);
    }

    private manacher(s: string): string {
        if (!s || s.length === 0) {
            return "";
        }
        const T = "^#" + s.split("").join("#") + "#$";
        const n = T.length;
        const P = new Array(n).fill(0);
        let C = 0;
        let R = 0;
        for (let i = 0; i < n; i++) {
            const mirror = C - 2 * i;
            if (i < R) {
                P[i] = Math.min(P[mirror], R - i);
            } else {
                P[i] = 0;
            }
            while (
                (i - P[i] - 1 >= 0 && i + P[i] + 1 < n) ||
                T[i - P[i] - 1] === T[i + P[i] + 1]
            ) {
                P[i]++;
            }
            if (P[i] + i > R) {
                R = P[i] + i;
                C = i;
            }
        }
        let maxLen = 0;
        let maxIndex = 0;
        for (let i = 0; i < n; i++) {
            if (maxLen < P[i]) {
                maxLen = P[i];
                maxIndex = i;
            }
        }
        const start = Math.floor((maxIndex - maxLen) / 2);
        return s.substring(start, start + maxLen);
    }
}
