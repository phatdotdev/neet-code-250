class TimeNode {
    value;
    timestamp;

    constructor(value: string, timestamp: number) {
        this.value = value;
        this.timestamp = timestamp;
    }
}

class TimeMap {
    private keyStore: Map<string, TimeNode[]>;

    constructor() {
        this.keyStore = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key)!.push(new TimeNode(value, timestamp));
    }

    get(key: string, timestamp: number): string {
        const arr = this.keyStore.get(key);
        if (!arr || arr.length === 0) return "";

        let l = 0,
            r = arr.length - 1;
        let res = "";

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (arr[m].timestamp <= timestamp) {
                res = arr[m].value;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
