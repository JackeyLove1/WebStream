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

const obj1 = {a : 123}
if ( 'a' in obj1 ) {
    console.log("found a!")
}


interface Dog{
    live() : void
}

interface LittleDog extends Dog {
    woof(): void
}

type T1 = LittleDog extends Dog ? number : string;
type T2 = Cat extends Dog ? number : string;

function isFish(pet : Fish | Cat) : pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let word = "World"
let Greeting = `hello ${word}`
console.log("Greeting: ", Greeting)

type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];
const palette : Record<Colors, RGB|string> = {
    red: [255, 0, 0],
    green:"#00ff00",
    blue:[0,0,255],
}
console.log("palette: ", palette)

type Obj2 = {
    [p in "foo"]: number
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type A = {
    a?: string,
    readonly b: number
}

