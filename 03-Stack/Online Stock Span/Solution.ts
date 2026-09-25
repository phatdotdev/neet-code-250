class StockSpanner {
    private stack: number[][];
    private top: number;

    constructor() {
        this.top = -1;
        this.stack = new Array(10000);
    }

    next(price: number): number {
        let span: number = 1;
        while (this.top >= 0 && price >= this.stack[this.top][0]) {
            span += this.stack[this.top--][1];
        }
        this.top++;
        this.stack[this.top] = [price, span];
        return span;
    }
}
