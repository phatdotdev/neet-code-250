class MyHashSet {
    private keys: boolean[];
    private readonly size = 1000001;

    constructor() {
        this.keys = new Array(this.size).fill(false);
    }

    add(key: number): void {
        this.keys[key] = true;
    }

    remove(key: number): void {
        this.keys[key] = false;
    }

    contains(key: number): boolean {
        return this.keys[key];
    }
}