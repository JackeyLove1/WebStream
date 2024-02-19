import * as assert from "assert";

export type Node<T> =  LinkedNode<T> | null;
export type Element<T> = T | null

export class LinkedNode<T>{
    e: Element<T>;
    next: Node<T>;
    constructor(e?: T, next?: Node<T>){
        this.e = e ?? null;
        this.next = next ?? null;
    }

    toString(): string {
        return String(this.e);
    }
}

export class LinkedList<T> {
    private dummy : LinkedNode<T>;
    private size: number;

    constructor() {
        this.dummy = new LinkedNode<T>()
        this.size = 0
    }

    getSize(): number {
        return this.size
    }

    isEmpty() : Boolean {
        return this.size === 0
    }

    private checkIndex(index : number) : void {
        if (!(0 <= index && index < this.size)){
            throw new Error("Out of List Size")
        }
    }

    add(index: number, e: T): void {
        this.checkIndex(index)
        let prev = this.dummy
        for (let i = 0; i < index; ++i){
            prev = prev!.next
        }
        let node = new LinkedNode(e)
        node.next = prev!.next
        prev!.next = node
        this.size++
    }

    addFirst(e: T): void {
        this.add(0, e)
    }

    addLast(e: T): void {
        this.add(this.size, e)
    }

    remove(index: number): Element<T>{
        this.checkIndex(index)
        let prev = this.dummy
        for (let i = 0; i < index; i++){
            prev = prev!.next
        }
        let remNode = prev!.next
        prev!.next = remNode!.next
        remNode!.next = null
        this.size--
        return remNode.e
    }

    get(index: number): Element<T> {
        this.checkIndex(index)
        let curNode = this.dummy.next
        for (let i = 0; i < index; i++){
            curNode = curNode!.next
        }
        return curNode!.e
    }
}