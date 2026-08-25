class MyHashMap2 {
    private readonly size = 1009;
    private readonly bucket_size = 9175;
    private map: (number | undefined)[][];

    constructor(){
        this.map = new Array(this.size);
        for(let i = 0; i < this.size; i++){
            this.map[i] = new Array(this.bucket_size).fill(undefined);
        }
    }

    put(key: number, value: number): void {
        this.map[key % this.size][Math.floor(key / this.size)] = value;
    }

    get(key: number): number {
        return this.map[key % this.size][Math.floor(key / this.size)] ?? -1; 
    }

    remove(key: number): void {
        this.map[key % this.size][Math.floor(key / this.size)] = undefined;
    }
}

class HashNode {
    key: number;
    value: number;
    next: HashNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class MyHashMap {
    private readonly SIZE = 1009;
    private buckets: (HashNode | null)[];

    constructor(){
        this.buckets = new Array(this.SIZE).fill(null);
    }

    private hash(key: number){
        return key % this.SIZE;
    }

    put(key: number, value: number): void{
        let curr = this.buckets[this.hash(key)];
        if(curr === null){
            this.buckets[this.hash(key)] = new HashNode(key, value);
        } else {
           while(curr.next != null && curr.key != key){
            curr = curr.next;
           }
           if(curr.key === key){
            curr.value = value;
           } else {
            curr.next = new HashNode(key, value);
           }
        }
    }

    get(key: number): number{
        let curr = this.buckets[this.hash(key)];
        if(curr === null){
            return -1;
        }
        while(curr.next != null && curr.key != key){
            curr = curr.next;
        }
        if(curr.key === key){
            return curr.value;
        }
        return -1;
    }

    remove(key: number): void {
        let curr: HashNode | null = this.buckets[this.hash(key)];
        let prev: HashNode | null = null;
        while(curr !== null && curr.key !== key){
            prev = curr;
            curr = curr.next;
        }
        if(curr === null){
            return;
        } else {
            if(prev === null){
                this.buckets[this.hash(key)] = curr.next;
            } else {
                prev.next = curr.next;
            }
        }
    }

}

