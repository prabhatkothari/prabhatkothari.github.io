let score = localStorage.getItem('score');
console.log(score);
let div = document.querySelector("#score");

div.append(score);