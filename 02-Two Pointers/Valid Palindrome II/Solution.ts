class Solution {

    validPalindrome(s: string): boolean {
        let l = 0, r = s.length - 1;
        while(l < r){
            if(s[l] !== s[r]){
                return this.isPalindromeHelper(s, l + 1, r) || this.isPalindromeHelper(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }

    private isPalindromeHelper(s: string, l: number, r: number): boolean{
        while(l > r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}