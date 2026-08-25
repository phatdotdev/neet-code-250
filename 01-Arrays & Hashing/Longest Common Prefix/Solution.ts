class Solution {
    longestCommonPrefix(strs: string[]): string {
        for(let i = 0; i < strs[0].length; i++){
            for(let j = 1; j < strs.length; j++){
                if(i >= strs[j].length || strs[j].charAt(i) != strs[j-1].charAt(i)){
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}