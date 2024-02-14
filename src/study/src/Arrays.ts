import isEqual from 'lodash/isEqual';

interface ArrayTrait<T> {
    add(index: number, e: T): void

    push(e: T): void
}

export class TinyArray<T> implements ArrayTrait<T> {
    private capacity: number
    private data: T[]

    constructor(params?: number | T[]) {
        if (Array.isArray(params)) {
            this.data = params
            this.capacity = params.length
        } else {
            this.capacity = params ?? 10
            this.data = new Array<T>(this.capacity);
        }
    }

    private resize(newCapacity: number): void {
        const newData = new Array<T>(newCapacity);
        for (let i = 0; i < Math.min(newCapacity, this.capacity) ; i++){
            newData[i] = this.data[i];
        }
        this.data = newData
        this.capacity = newCapacity
    }

    getSize(): number {
        return this.data.length
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }


    public add(index: number, e: T) {
        if (index < 0 || index > this.data.length) {
            throw new Error('add failed. Require index >= 0 and index <= size')
        }
        if (index === this.data.length){
            this.data.push(e)
            return
        }
        this.data.splice(index, 0, e);
    }

    public push(e: T) {
        this.data.push(e)
    }
}