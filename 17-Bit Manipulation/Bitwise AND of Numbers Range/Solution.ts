class Solution {
    rangeBitwiseAnd(left: number, right: number): number {
        let shift = 0;
        while (left !== right) {
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
            shift++;
        }
        return left * 2 ** shift;
    }
}
