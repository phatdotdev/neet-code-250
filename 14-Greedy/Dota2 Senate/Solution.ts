class Solution {
    predictPartyVictory(senate: string): string {
        const n = senate.length;
        const chars = senate.split("");
        let countR = 0;
        let countD = 0;
        for (let i = 0; i < n; i++) {
            if (chars[i] === "D") {
                countD++;
            } else {
                countR++;
            }
        }
        let banR = 0;
        let banD = 0;
        let i = 0;
        while (countR > 0 && countD > 0) {
            if (chars[i] === "D") {
                if (banD > 0) {
                    countD--;
                    chars[i] = "0";
                    banD--;
                } else {
                    banR++;
                }
            } else if (chars[i] === "R") {
                if (banR > 0) {
                    countR--;
                    chars[i] = "0";
                    banR--;
                } else {
                    banD++;
                }
            }
            i = (i + 1) % n;
        }
        return countR === 0 ? "Dire" : "Radiant";
    }
}
