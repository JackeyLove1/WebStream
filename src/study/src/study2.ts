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

setTimeout((from:number, to:number) =>{

}, 10, 1, 10)