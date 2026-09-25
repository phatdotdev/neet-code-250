class Solution {
    encode(strs: string[]): string {
        let res: string = "";
        for (const str of strs) {
            res = res + `${str.length}-${str}`;
        }
        return res;
    }

    decode(str: string): string[] {
        let i = 0;
        const res: string[] = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== "-") {
                j++;
            }
            let len = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }

        return res;
    }
}
