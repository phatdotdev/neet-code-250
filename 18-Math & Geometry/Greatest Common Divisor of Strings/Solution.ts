class Solution {
    gcdOfStrings(str1: string, str2: string): string {
        if (str1 + str2 !== str2 + str1) return "";
        let res = "";
        let a = str1.length,
            b = str2.length;
        while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return str1.substring(0, a);
    }
}
