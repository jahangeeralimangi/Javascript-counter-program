

// This is a comment
/* this is a comment */
//document.getElementById(`Myh1`).textContent = `Hello`;
//document.getElementById(`myP`).textContent = `i like pizza `;

//let x = 123;
//console.log(x);

//let age = 20;
//let price = 19.99;
//let gpa = 3.5;
//let firstName = `jani`;

//console.log(`your age is ${age}`);
//console.log(`the price is ${price}`);
//console.log(`your gpa is ${gpa}`);
//console.log(`your first name is ${firstName}`);
/*
let firstName = `jahangeer Ali `;
let isStudent = true;
let age =21;

document.getElementById(`P1`).textContent = `your name is ${firstName}`;
document.getElementById(`P2`).textContent = `are you a student? ${isStudent}`;
document.getElementById(`P3`).textContent = `your age is ${age}`;

let students = 30;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2;
//students++;
students--;
console.log(students);
let username;
username = window.prompt(`what is your name`);
console.log(username);

let username;
document.getElementById(`Mysubmit`).onclick = function(){
    username = document.getElementById(`Mytext`).value;
    document.getElementById(`myH1`).textContent = ` Hello ${username}`;
}

let x = "pizza";
let y = "burger";
let z = "pasta";
 
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z) */

const countLabel = document.getElementById(`countLabel`);
const decreaseBtn = document.getElementById(`decreaseBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}