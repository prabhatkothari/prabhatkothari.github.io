let displayClock = document.querySelector("#display");
let divColor = document.querySelectorAll(".divitem");
let divColor2 = document.querySelectorAll(".divitem2");

let randColor = () => {
    return Math.floor(Math.random() * 255) + 1;
}

let colorDifferent = [`rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`, `rgb(${randColor()},${randColor()},${randColor()})`]

divColor[0].style.backgroundColor = colorDifferent[0];
divColor[1].style.backgroundColor = colorDifferent[1];
divColor[2].style.backgroundColor = colorDifferent[2];
divColor[3].style.backgroundColor = colorDifferent[3];
divColor[4].style.backgroundColor = colorDifferent[4];
divColor[5].style.backgroundColor = colorDifferent[5];
divColor[6].style.backgroundColor = colorDifferent[2];
divColor[7].style.backgroundColor = colorDifferent[5];
divColor[8].style.backgroundColor = colorDifferent[4];


divColor2[0].style.backgroundColor = colorDifferent[5]
divColor2[1].style.backgroundColor = colorDifferent[3]
divColor2[2].style.backgroundColor = colorDifferent[4]
divColor2[3].style.backgroundColor = colorDifferent[2]
divColor2[4].style.backgroundColor = colorDifferent[1]
divColor2[5].style.backgroundColor = colorDifferent[0]
divColor2[6].style.backgroundColor = colorDifferent[4]
divColor2[7].style.backgroundColor = colorDifferent[3]
divColor2[8].style.backgroundColor = colorDifferent[5]
divColor2[9].style.backgroundColor = colorDifferent[1]
divColor2[10].style.backgroundColor = colorDifferent[2]
divColor2[11].style.backgroundColor = colorDifferent[0]
divColor2[12].style.backgroundColor = colorDifferent[5]
divColor2[13].style.backgroundColor = colorDifferent[0]
divColor2[14].style.backgroundColor = colorDifferent[4]
divColor2[15].style.backgroundColor = colorDifferent[1]
divColor2[16].style.backgroundColor = colorDifferent[2]
divColor2[17].style.backgroundColor = colorDifferent[3]
divColor2[18].style.backgroundColor = colorDifferent[5]
divColor2[19].style.backgroundColor = colorDifferent[1]
divColor2[20].style.backgroundColor = colorDifferent[2]
divColor2[21].style.backgroundColor = colorDifferent[4]
divColor2[22].style.backgroundColor = colorDifferent[0]
divColor2[23].style.backgroundColor = colorDifferent[3]
divColor2[24].style.backgroundColor = colorDifferent[5]

let randFDiv2 = () => {

    let randDiv2 = Math.floor(Math.random() * 25);
    return parseInt(randDiv2);
}
let white = randFDiv2();
let refreshButton = document.querySelector("#refresh-btn");

divColor2[white].style.backgroundColor = "rgb(202, 199, 199)";
function reload() {
    reload = location.reload();
    alert("This page will get refreshed!!");
}

refreshButton.addEventListener("click", reload, false);


// part 2
let i = 0;
let count = 0;
let countSteps = 0;

function index() {
    for (let i of divColor2) {
        i.addEventListener("click", () => {
            count = i.id;
            swap();



        })
    }
    function swap() {
        win();
        if (displayClock.innerText === "00:00:00" && i === 0) {
            alert("Please click on start button!!");
            i = 1;

        }

        if (white - 5 >= 0) {

            if (parseInt(count) === white - 4) {

                divColor2[white].style.backgroundColor = divColor2[white - 5].style.backgroundColor;
                divColor2[white - 5].style.backgroundColor = "rgb(202, 199, 199)";
                white = white - 5;
                countSteps++;
                localStorage.setItem("counts", countSteps)
            }
        }
        if (white + 5 < 25) {
            if (parseInt(count) === white + 6) {

                divColor2[white].style.backgroundColor = divColor2[white + 5].style.backgroundColor;
                divColor2[white + 5].style.backgroundColor = "rgb(202, 199, 199)";
                white = white + 5;
                countSteps++;
                localStorage.setItem("counts", countSteps)

            }
        }
        if (white % 5 != 0) {
            if (parseInt(count) === white) {

                divColor2[white].style.backgroundColor = divColor2[white - 1].style.backgroundColor;
                divColor2[white - 1].style.backgroundColor = "rgb(202, 199, 199)";
                white = white - 1;
                countSteps++;
                localStorage.setItem("counts", countSteps)
            }
        }
        if ((white + 1) % 5 != 0) {
            if (parseInt(count) === white + 2) {

                divColor2[white].style.backgroundColor = divColor2[white + 1].style.backgroundColor;
                divColor2[white + 1].style.backgroundColor = "rgb(202, 199, 199)";
                white = white + 1;
                countSteps++;
                localStorage.setItem("counts", countSteps)
            }
        }
    }


}



setInterval(index, 500);


//you win 
let scoreDiv = document.querySelector("score");
function score() {

    let score = Math.floor(100000 / ((parseInt(displayMinutes) * 60) + displaySeconds));
    localStorage.setItem("score", score);


}

let startBtn = document.querySelector("#startAgain")
function win() {
    if (divColor[0].style.backgroundColor === divColor2[6].style.backgroundColor) {
        if (divColor[1].style.backgroundColor === divColor2[7].style.backgroundColor) {
            if (divColor[2].style.backgroundColor === divColor2[8].style.backgroundColor) {
                if (divColor[3].style.backgroundColor === divColor2[11].style.backgroundColor) {
                    if (divColor[4].style.backgroundColor === divColor2[12].style.backgroundColor) {
                        if (divColor[5].style.backgroundColor === divColor2[13].style.backgroundColor) {
                            if (divColor[6].style.backgroundColor === divColor2[16].style.backgroundColor) {
                                if (divColor[7].style.backgroundColor === divColor2[17].style.backgroundColor) {
                                    if (divColor[8].style.backgroundColor === divColor2[18].style.backgroundColor) {

                                        window.location = "win.html"
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
}

let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


let interval = null;

let status = "stopped";

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

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

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

let btnStart = document.querySelector("#starStop");

function startStop() {

    if (status === "stopped") {

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


