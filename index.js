function greet(){
    console.log("Hello")
}
greet();

//function
function showMessage(){
    console.log("This is a message")
}
showMessage();
//
function logInfo(){
    console.log("Logging information...")
}
logInfo();
//
function startGame(){
    console.log("Game started")
    endGame();
}
function endGame(){
    console.log("Game Over")
}
startGame();
//
function beginTask(){
    console.log("Task Started")
    finishTask();
}
function finishTask(){
    console.log("Task Finished")
}
beginTask();
function sumOfNumbers(a,b){
    console.log(`sum of two number:${a+b}`)
}
sumOfNumbers(100,200)
//
function printUppercasestring(name){
    console.log(name.toUpperCase())
}
printUppercasestring("nikhitha")
//
function printValue(a,b){
    console.log(a,b)
}
printValue(100)
//100 undefined
function print(a){
    console.log(a)
}
print(undefined)
//
function checkEmptyArray(arr1){
    if(arr1.length===0){
        console.log("empty array")
    }
    else{
        console.log("array not empty")
    }
}
checkEmptyArray([10,20,30])
// 
function differenceOfTwoNumbers(a,b){
console.log(`difference between two numbers: ${a-b}`)
}
differenceOfTwoNumbers(1000,500)
//
function printNameAge(name,age){
    console.log(`Hello, ${name}!`,`you are ${age} years old`)
}
printNameAge("chinnu",25)
//
function isEven(a){
    if(a%2===0){
        console.log("true")
    }else{
        console.log("false")
    }
}
isEven(14)
//
function isEvenPrint(a){
    return (a%2===0)
}
console.log(isEvenPrint(11))

//
function largestNum(a,b,c){
// 
(a>b&&a>c)?console.log((a)):(b>c&&b>a)?console.log((b)):console.log((c))
// console.log(res)
}
largestNum(10,20,85)
//
