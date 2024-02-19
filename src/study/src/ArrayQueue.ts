export interface Queue<T> {
    getSize(): number;

    isEmpty(): Boolean;

    enqueue(e: T): void;

    dequeue(): T | null;

    getFront(): T | null;
}

export class ArrayQueue<T> implements Queue<T> {
    private arrays: Array<T>;

    constructor(size ?: number) {
        size = size ?? 10
        this.arrays = new Array<T>(size)
    }
    getSize(): number {
        return this.arrays.length
    }

    isEmpty(): Boolean {
        return this.arrays.length === 0
    }

    enqueue(e: T): void {
        this.arrays.push(e)
    }

    dequeue(): T | null {
        if (this.arrays.length === 0) {
            return null
        }
        return this.arrays.shift()
    }

    getFront(): T | null {
        if (this.arrays.length === 0) {
            return null
        }
        return this.arrays[0]
    }
}