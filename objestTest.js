function UGood(text) {
    if(text === "good") {
        return "im good"
    }
    else {
        return "nah"
    }
}

console.log(UGood("hi"))

// 1.function declaration
function multiply1(a,b){
    return a * b
}
function doSomething(x){
    return x
}
const y=(doSomething(multiply1))
console.log(y)

// 2.function expression (ussing arrow funtion syntax)
const multiply2 = (a, b) => {return a*b}
console.log(multiply2(4,2))

// 3.function expression (using funtion declaration)
const multiply3 = function(a,b){return a*b}
console.log(multiply3(4,2))


function myFunc(theObject){
    theObject.model = "A9999"
}

const product = {model: "A10001" , price: 199}
console.log(product.model) //"A1001"

myFunc(product);
console.log(product.model) //"A9999"

function square(side) {
    side = 9
}

let theSide = 2
square(theSide)
console.log(theSide)

function sum1(x,y, ...z){
    // return x + y
    // return arguments[0] + arguments[1]
    for(argu of arguments){
        console.log(argu)
    }
    console.log(`arguments.length ${arguments.length}`)
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    console.log(`z: ${z}`)
}
(sum1(1,2,3,4,5,6,7,8))

function sum(x,y, ...z){
    // return x+y
    // return arguments[0] + arguments[1]
    let j=0;
    for(argu of arguments){
        j+=argu
    }
    console.log(j)
}
sum(1, 2, 3, 4, 5, 6)

function greeting(greet='Hello', whom="Guest", quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting("Good morning", "Guy", "Great!"))
console.log(greeting(undefined, null, "Fine"))
console.log(greeting())