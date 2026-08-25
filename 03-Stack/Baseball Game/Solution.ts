class Solution {
    calPoints(operations: string[]): number {
        const st = new Array(operations.length);
        let total = 0;
        let size = 0;
        for(const operation of operations){
            if(operation === "D"){
                st[size] = 2 * st[size - 1];
                total += st[size];
                size++;
            } else if(operation === "C"){
                size--;
                total -= st[size];
            } else if(operation === "+"){
                st[size] = st[size - 1] + st[size - 2];
                total += st[size];
                size++;
            } else if(operation === "5"){
                st[size] = 5;
                total += 5;
                size++;
            } else {
                st[size] = parseInt(operation);
                total += st[size];
                size++;
            }
        }
        return total;
    }
}