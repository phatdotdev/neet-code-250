class Solution {
    mergeAlternately(word1: string, word2: string): string {
        const res: string[] = [];
        let i = 0; 
        while(i < word1.length && i < word2.length){
            res.push(word1[i]);
            res.push(word2[i]);
            i++;
        }
        if(i < word1.length){
            res.push(word1.substring(i));
        }
         if(i < word2.length){
            res.push(word2.substring(i));
        }
        return res.join("");
    }
}