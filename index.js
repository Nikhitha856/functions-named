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
