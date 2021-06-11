let divColor = document.querySelectorAll(".divitem");
let divColor2 = document.querySelectorAll(".divitem2");

let randColor = () => {
    return Math.floor(Math.random() * 255) + 1;
}

let randFDiv = () => {

    let randDiv = Math.floor(Math.random() * 9);
    return parseInt(randDiv);
}
let randFDiv2 = () => {

    let randDiv2 = Math.floor(Math.random() * 25);
    return parseInt(randDiv2);
}

let colorFix = `rgb(${randColor()},${randColor()},${randColor()})`;
for (let j = 0; j < 9; j++) {
    divColor[j].style.backgroundColor = colorFix;
}

for (let k = 0; k < 25; k++) {
    divColor2[k].style.backgroundColor = colorFix;
}

let colorDifferent = [`rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`,]




let randDistribute = () => {
    return Math.floor(Math.random() * 6);
}


for (i = 0; i < 9; i++) {

    divColor[randFDiv()].style.backgroundColor = colorDifferent[randDistribute()];
}

for (p = 0; p < 25; p++) {


    divColor2[randFDiv2()].style.backgroundColor = colorDifferent[randDistribute()];
}
var white = randFDiv2();
divColor2[white].style.backgroundColor = "rgb(202, 199, 199)";
let whiteColor = divColor2[white].style.backgroundColor;
let refreshButton = document.querySelector("#refresh-btn");
function reload() {
    reload = location.reload();
    alert("This page will get refreshed!!");
}

refreshButton.addEventListener("click", reload, false);

// part 2
function modify() {
    return white;
}
function remove1(whiteDum) {
    whiteDum = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", fun3);
    }
    gem(1);
}

function gem(newUpElement) {
    newUpElement = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", gem);
    }

    if (white + 5 < 25) {

        divColor2[newUpElement + 5].addEventListener("click", fun3);
    }
}

function fun3() {
    if (white + 5 < 25) {
        divColor2[white].style.backgroundColor = divColor2[white + 5].style.backgroundColor;
        divColor2[white + 5].style.backgroundColor = "rgb(202, 199, 199)";
        white = white + 5;

    }
    remove1(1);

}


for (let i of divColor2) {
    i.addEventListener("mouseover", gem);
}


//up
function remove2(whiteDum) {
    whiteDum = modify();
    for (let i of divColor2) {
        divColor2[white].removeEventListener("click", fun1);
    }
    gem2(1);
}
function gem2(newUpElement) {
    newUpElement = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", gem2);
    }

    if (white - 5 >= 0) {


        divColor2[newUpElement - 5].addEventListener("click", fun1);
    }
}

function fun1() {
    if (white - 5 >= 0) {
        divColor2[white].style.backgroundColor = divColor2[white - 5].style.backgroundColor;
        divColor2[white - 5].style.backgroundColor = "rgb(202, 199, 199)";
        white = white - 5;

    }
    remove2(1);

}

for (let i of divColor2) {
    i.addEventListener("mouseover", gem2);
}


// left
function remove3(whiteDum) {
    whiteDum = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", fun5);
    }
    gem3(1);
}
function gem3(newUpElement) {
    newUpElement = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", gem3);
    }

    if (white % 5 > 0) {

        divColor2[newUpElement - 1].addEventListener("click", fun5);
    }
}
function fun5() {
    if (white % 5 > 0) {
        divColor2[white].style.backgroundColor = divColor2[white - 1].style.backgroundColor;
        divColor2[white - 1].style.backgroundColor = "rgb(202, 199, 199)";
        white = white - 1;

    }
    remove3(1);


}

for (let i of divColor2) {
    i.addEventListener("mouseover", gem3);
}


//right
function remove4(whiteDum) {
    whiteDum = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", fun6);
    }
    gem4();
}

function gem4() {
    newUpElement = modify();
    for (let i of divColor2) {
        i.removeEventListener("click", gem4);
    }
    if ((white + 1) % 5 > 0) {

        divColor2[newUpElement + 1].addEventListener("click", fun6);
    }
}

function fun6() {
    if ((white + 1) % 5 > 0) {
        divColor2[white].style.backgroundColor = divColor2[white + 1].style.backgroundColor;
        divColor2[white + 1].style.backgroundColor = "rgb(202, 199, 199)";
        white = white + 1;
    }

    remove4(1);

}
for (let i of divColor2) {
    i.addEventListener("mouseover", gem4);
}

//you win 
function score() {

    let score = Math.floor(100000 / ((parseInt(displayMinutes) * 60) + displaySeconds));
    return score;

}

if (divColor[0].style.backgroundColor === divColor2[6].style.backgroundColor) {
    if (divColor[1].style.backgroundColor === divColor2[7].style.backgroundColor) {
        if (divColor[2].style.backgroundColor === divColor2[8].style.backgroundColor) {
            if (divColor[3].style.backgroundColor === divColor2[11].style.backgroundColor) {
                if (divColor[4].style.backgroundColor === divColor2[12].style.backgroundColor) {
                    if (divColor[5].style.backgroundColor === divColor2[13].style.backgroundColor) {
                        if (divColor[6].style.backgroundColor === divColor2[16].style.backgroundColor) {
                            if (divColor[7].style.backgroundColor === divColor2[17].style.backgroundColor) {
                                if (divColor[8].style.backgroundColor === divColor2[18].style.backgroundColor) {
                                    console.log("you win");
                                    score();
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}






// timmer
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {

    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

let btnStart = document.querySelector("#starStop");

function startStop() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);

        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

//normal mode completes







