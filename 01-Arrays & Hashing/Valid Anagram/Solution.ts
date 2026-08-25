class Solution {
    isAnagram(s: string, t: string): boolean {
        const charS = s.split("");
        const charT = s.split("");

        charS.sort();
        charT.sort();

        return charS.join("") === charT.join("");
    }
}