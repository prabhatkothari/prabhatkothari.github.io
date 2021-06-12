let score = localStorage.getItem('score');

let div = document.querySelector("#score");

div.append(score);

let counts = localStorage.getItem('counts');
let stepDiv = document.querySelector("#stepsCount")

stepDiv.append(counts);

let names = document.querySelector("#name");
localStorage.setItem(names.innerText, score);

