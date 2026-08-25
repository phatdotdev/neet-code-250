class Solution {
    convertToTitle(columnNumber: number): string {
        let res: string = "";
        while (columnNumber > 0) {
            columnNumber--;
            const remainder = columnNumber % 26;
            res = String.fromCharCode(remainder + "A".charCodeAt(0)) + res;
            columnNumber = Math.floor(columnNumber / 26);
        }
        return res;
    }
}
