import {set} from "lodash";

function SumAll<T extends number[]>(... args: T): number{
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum;
}


console.log(SumAll(1,2,3,4,5))

function SumAll2<T extends number[]>(... args: T): number {
    let sum = 0;
    args.forEach((value,_) => {
        sum += value
    })
    return sum;
}
console.log(SumAll2(1,2,3,4,5))

let timer1 = setTimeout(()=>{console.log("hello")}, 10, )
clearTimeout(timer1)

let timer2 = setInterval(()=>{console.log("hello")}, 10, )
setTimeout(()=>{
    clearInterval(timer2)
}, 50)

function tick(from: number, to: number) : void {
    console.log(from)
    if (from < to){
        setTimeout((from:number, to: number) => {
            tick(from, to);
        },1,from + 1, to);
    } else {
        console.log("done ... ")
    }
}

tick(1, 10)

class User {
    private _fullName : string = ""
    constructor(name:string) {
        this._fullName = name
    }
    get fullName():string {
        return this._fullName
    }
    set fullName(newName: string) {
        this._fullName = newName
    }
    toString() : string {
        return this._fullName
    }
}

let u1 = new User("name")
console.log(u1)

let promise1 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve("promise done")
    }, 10)
});
promise1.then(
    result => console.log(result),
    error => console.log(error)
)

/*
let promise2 = fetch("https://www.baidu.com")
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(err => console.log(err))
 */

/*
let promise3 = new Promise(
    () => {
        setTimeout(() => {
            throw new Error("Error ... ")
        })})
    .then(resolve => console.log("resolve: ", resolve))
    .catch(error => console.log("catch: ", error))
 */

async function fn1(){

}
fn1().then(resolve => {
    console.log("resolve: ", resolve)
})

async function showAvatar() {

    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters: number = 5) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters: number = 34) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);