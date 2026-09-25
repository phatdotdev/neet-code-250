class E {
    val: number;
    min: number;
    constructor(value: number, min: number) {
        this.val = value;
        this.min = min;
    }
}

class MinStack {
    private stack: E[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let min = val;
        if (this.stack.length > 0) {
            min = Math.min(min, this.getMin());
        }
        this.stack.push(new E(val, min));
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].min;
    }
}
