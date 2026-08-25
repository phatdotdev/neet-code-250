class Solution {
    isPalindrome(s: string): boolean {
        let l = 0, r = s.length - 1;
        while(l < r){
            if(!this.isAlphanumeric(s[l])){
                l++;
            } else if(!this.isAlphanumeric(s[r])){
                r--;
            } else {
                if(s[l].toLowerCase() != s[r].toLowerCase()){
                    return false;
                }
                l++;
                r--;
            }
        }
        return true;
    }

    private isAlphanumeric(ch: string): boolean {
        return (ch.charCodeAt(0) >= "0".charCodeAt(0) && ch.charCodeAt(0) <= "9".charCodeAt(0))
        || (ch.charCodeAt(0) >= "a".charCodeAt(0) && ch.charCodeAt(0) <= "z".charCodeAt(0))
        || (ch.charCodeAt(0) >= "A".charCodeAt(0) && ch.charCodeAt(0) <= "Z".charCodeAt(0));
    }
}