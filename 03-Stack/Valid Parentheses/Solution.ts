class Solution1 {
    isValid(s: string):boolean {
        const st: string[] = [];
        for(const ch of s.split("")){
            if(ch === "(" || ch === "[" || ch === "{"){
                st.push(ch);
            } else if(ch === ")"){
                if(st.pop() !== "("){
                    return false;
                }
            } else if(ch === "]"){
                if(st.pop() !== "["){
                    return false;
                }
            } else if(ch === "}"){
                if(st.pop() !== "{"){
                    return false;
                }
            }
        }
        return st.length === 0;
    }
}

class Solution2 {
    isValid(s: string): boolean {
        const st: string[] = [];

        for(const ch of s){
            if(ch === "(") st.push(")");
            else if(ch === "[") st.push("]");
            else if(ch === "{") st.push("}");
            else if(ch !== st.pop()) return false;
        }

        return st.length === 0;
    }
}