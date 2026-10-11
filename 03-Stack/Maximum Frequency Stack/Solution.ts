class FreqStack {
    private freqMap: Map<number, number>;
    private groupStack: Map<number, number[]>;
    private maxFreq: number;

    constructor() {
        this.freqMap = new Map();
        this.groupStack = new Map();
        this.maxFreq = 0;
    }

    push(val: number): void {
        const freq = (this.freqMap.get(val) || 0) + 1;

        this.freqMap.set(val, freq);

        if (!this.groupStack.has(freq)) {
            this.groupStack.set(freq, []);
        }

        this.groupStack.get(freq)!.push(val);
        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }
    }

    pop(): number {
        const val: number = this.groupStack.get(this.maxFreq)!.pop()!;
        this.freqMap.set(val, this.freqMap.get(val)! - 1);
        if (this.groupStack.get(this.maxFreq)?.length === 0) {
            this.maxFreq--;
        }
        return val;
    }
}
