let arr = ["I", "go", "home"];
console.log(arr)

arr.splice(0, 1)
console.log(arr)

arr.splice(0, 0, "0")
console.log(arr)

const arr2 = arr.slice(0)
console.log(arr2)

arr.forEach((value, index, array) => {
    console.log(`value:${value}, index: ${index}`)
})

const arr3 = arr.concat(["4", "5", "6"])
arr3.map((value, index, arrary) => {
    console.log(`value:${value}\t, index: ${index}`)
})

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

const idx1 = users.find((item, _) => item.id === 1)
console.log("idx1: ", idx1)

const idx2 = users.findIndex(item => item.name === "John")
console.log("idx2: ", idx2)

let user2 = users.filter(item => item.id < 3)
console.log("user2: ", user2)

