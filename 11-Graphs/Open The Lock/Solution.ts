class Solution {
    openLock(deadpends: string[], target:string): number {
        const dead = new Set(deadpends);
        const visited = new Set();

        if(dead.has("0000")){
            return -1;
        }
        const queue: string[] = ["0000"];
        visited.add("0000");

        let head = 0;
        let steps = 0;

        while(head < queue.length){
            const size = queue.length - head;
           for(let i = 0; i < size; i++){
            const curr = queue[head++];
            if(curr === target){
                return steps;
            }
            const chars = curr.split("");
            for(let j = 0; j < 4; j++){
                const original = chars[j];

                chars[j] = original === '0' 
                            ? '9' 
                            : String.fromCharCode(original.charCodeAt(0) - 1);
                
                let next = chars.join("");

                if(!dead.has(next) && !visited.has(next)){
                    visited.add(next);
                    queue.push(next);
                }
                chars[j] = original === '9' 
                            ? '0' 
                            : String.fromCharCode(original.charCodeAt(0) + 1);
                next = chars.join("");

                if(!dead.has(next) && !visited.has(next)){
                    visited.add(next);
                    queue.push(next);
                }

                chars[j] = original;
            }
           }
           steps++;
        }

        return -1;
    }
}