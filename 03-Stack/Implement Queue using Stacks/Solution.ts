class MyQueue {

    private stackIn: number[];
    private stackOut: number[];

    constructor() { 
        this.stackIn = [];
        this.stackOut = [];
    }

    push(x: number): void {
        this.stackIn.push(x);
    }

    pop(): number {
        if(this.stackOut.length === 0){
            let size = this.stackIn.length;
            while(size-- > 0){
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut.pop()!;
    }

    peek(): number {
         if(this.stackOut.length === 0){
            let size = this.stackIn.length;
            while(size-- > 0){
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut[this.stackOut.length - 1];
    }

    empty(): boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}