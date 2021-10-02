var buttonE1 = document.querySelector("#save-task");
console.log(buttonE1);

var tasksToDoE1 = document.querySelector("#tasks-to-do");


var createTaskHandler = function () {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
}

buttonE1.addEventListener("click", createTaskHandler);

var counter = 10;
var countdown = function () {
    console.log(counter);
    counter--;
    if (counter === 0) {
        console.log("blastoff");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);

var sayHello = function () {
    console.log("hello there");

};

var timedGreeting = setTimeout(sayHello, 2000);