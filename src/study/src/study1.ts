interface Cat {
    run(): void;
}

interface Fish {
    swim(): void;
}

// namespace
namespace Utils {
    export function isString(value: any) {
        return typeof value === "string";
    }
}

console.log(Utils.isString("yes"));

declare class Animal {
    constructor(name: string);

    eat(): void;

    sleep(): void;
}

import {Character} from "./types";

export const charactor: Character = {
    catchphrase: "Yee-haw!",
    name: "Hello, World!",
}

console.log("charactor: ", charactor)

import {Version} from "./types";

const version: Version = {
    version: "0.0.1",
}
console.log("version: ", version)

type MyObj = {
    foo: number,
    bar: string,
}

type ObjKeys = keyof MyObj;

function prop<Obj, K extends keyof Obj>(obj: Obj, key: K): Obj[K] {
    return obj[key];
}

const obj1 = {a: 123}
if ('a' in obj1) {
    console.log("found a!")
}


interface Dog {
    live(): void
}

interface LittleDog extends Dog {
    woof(): void
}

type T1 = LittleDog extends Dog ? number : string;
type T2 = Cat extends Dog ? number : string;

function isFish(pet: Fish | Cat): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let word = "World"
let Greeting = `hello ${word}`
console.log("Greeting: ", Greeting)

type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];
const palette: Record<Colors, RGB | string> = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255],
}
console.log("palette: ", palette)

type ObjP = {
    [p in "foo"]: number
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type A = {
    a?: string,
    readonly b: number
}

// 交叉类型
type Obj1 = { username: string };
type Obj2 = { age: number }
let obj3: Obj1 & Obj2 = {
    username: "name",
    age: 123,
}

enum Week {
    Monday = 0,
    Tuesday
}

enum WeekDay {
    Monday = "Monday",
    Tuesday = "Tuesday"
}

let data1: Array<string> = ["a", "b"];
let any1: any = data1;
console.log("any1: ", any1);

interface List {
    add(): void

    remove(): void
}

class ArrayList implements List {
    add() {
        throw new Error("Not implement")
    }

    remove() {
        throw new Error("Not implement")
    }
}

class LinkedList implements List {
    add(): void {
    }

    remove(): void {
    }
}

interface Person {
    name: string
    price: number
    account: number

    [x: string]: any
}


type PKeys = keyof Person

type AllKeys<T> = T extends any ? T : never;
type PKeys2 = AllKeys<keyof Person>;

function printString(s?: string): void {
    if (s) console.log(s.toString());
}

export class DateUtil {
    static dateUtil: DateUtil

    private constructor() {
        console.log("Create DateUtil ... ")
    }

    static getInstance(): DateUtil {
        if (!this.dateUtil) {
            this.dateUtil = new DateUtil()
        }
        return this.dateUtil
    }

    static fromString() {
    }
}

console.log(DateUtil.getInstance() === DateUtil.getInstance())

// const array
const account = [1, 2, 3, 4] as const

let [custname, age, address, ...rest]: [string, number, string, ...any[]] = [
    "hello", 123, "abc", "efg", "123"
]
console.log("rest: ", rest)

class Person {
    name: string
    _age: number = 0
    addr: string
    static count: number = 0

    constructor(_name: string, _addr: string) {
        this.name = _name
        this.addr = _addr
    }

    set age(val: number) {
        if (val > 10 && val < 128) {
            this._age = val
        } else {
            throw new Error("Age is overflow!")
        }
    }

    get age(): number {
        return this._age
    }
}

const arr = [10, 20]
console.log(typeof arr)
let s = new Set<number>()
console.log(typeof s)

class Pay {
}

class AliPay extends Pay {
    payid: string
}

class WechatPay extends Pay {
    appid: string
}

let apay = new AliPay();
let wpay = new WechatPay();
console.log(apay instanceof Pay)
console.log(apay instanceof WechatPay)
console.log(apay instanceof AliPay)
console.log("payid" in AliPay)
console.log("appid" in AliPay)
console.log(wpay instanceof Pay)

let arrs = [0, 1, 2, 3, 4, 5]
console.log("slice(0, 1): ", arrs.slice(0, 1))
console.log("slice(1, 3): ", arrs.slice(1, 3))
console.log("slice(0, -1): ", arrs.slice(0, -1))
arrs.splice(1, 0, 100)
console.log("splice(1, 0, 100): ", arrs)

class Order {
    orderid!: string
    ordername!: string
    static count: number

    printOrd() {
    }

    static getCount() {
    }
}


class ObjectRefImpl<T extends object, K extends keyof T> {
    public readonly __v_isRef = true

    constructor(private readonly _object: T, private readonly _key: K) {
    }

    get value() {
        return this._object[this._key]
    }

    set value(newVal) {
        this._object[this._key] = newVal
    }
}

type ObjType = { username: string; age: 23 }
type ObjKeysType<T extends object, K extends T> = K extends keyof K ? K : never;
type KeysType<K> = K extends keyof ObjType ? K : never
type TestKeysType = KeysType<"username" | "age">

const obj2 = new ObjectRefImpl({username: "hello", age: 23}, "username")
const obj4 = new ObjectRefImpl({username: "hello", age: 23}, "username")

enum MessageType {
    Image = "Image",
    Audio = "Audio",
}

type Message = {
    id: number
    type: MessageType
    content: string
}

const messages: Message[] = [
    {id: 1, type: MessageType.Image, content: "hello"},
    {id: 2, type: MessageType.Audio, content: "world"},
    {id: 3, type: MessageType.Image, content: "hello, world"},
]

function searchMessage(id: number): Message | undefined;
function searchMessage(id: MessageType): Message[];
function searchMessage(param: number | MessageType): Message | Message[] | undefined {
    if (typeof param === "number") {
        return messages.find(msg => msg.id === param)
    } else {
        return messages.filter(msg => msg.type === param)
    }
}

console.log("search id 1:", searchMessage(1))
console.log("search type audio: ", searchMessage(MessageType.Audio))
console.log("search id 100: ", searchMessage(100))

class CommercialBank {
    public address: string = "Peking"
    public name: string = "wangwu"
    static count: number

    constructor(name: string, address: string) {
        this.address = address
        this.name = name
    }

    loan(): void {
        console.log(this.name + " is loaning")
    }
}

interface Customer {
    custname: string
    buymoney: number
}

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function getString(): string {
    return ""
}

type ResolveType<T> = T extends Promise<infer U> ? U : T;
const promise1 = new Promise<string>(resolve => {
    resolve("this is ok!");
})
type ResolvePromiseType = ReturnType<typeof promise1>;

type StringReturn = ReturnType<typeof getString>;
let string_return: StringReturn;
console.log("string return: ", (typeof string_return))

type Modules = {
    menu: {
        setActiveIndex: (index: string) => string,
        setCollapse: (index: string) => string,
    }

    tabs: {}
}

type MB<T, U> = `${T & string} / ${U & string}`
type TestMB = MB<'menu', 'setActiveIndex' | 'setCollapse'>

type ModulesSpliceKeys<T> = {
    [Key in keyof T] : T[Key]
}

type ModulesSpliceKeys_<T> = {
    [Key in keyof T] : MB<Key, keyof T[Key]>
}

type TestModulesSpliceKeys_ = ModulesSpliceKeys_<Modules>

type StringExclude= Exclude<string, string | number>

type DirectKeys<T> = T extends any ? T : never;
type CustomersKey = DirectKeys<keyof Customer>;

function simpleDeepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

interface Book{
    ISBN: string
    book_name?: boolean
    book_price: string
    store_count: number
    publish?: string
}

type SubBook = Pick<Book, "ISBN" | "book_name">

type OmitBook = Omit<Book, "ISBN">

function simpleDecorator(value: any){
    console.log(`hi, this is ${value}`);
    return value
}

@simpleDecorator
class DecoratorA{}

