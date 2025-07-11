// console.log(`Hello!!!!`);

// window.alert(`This is red alert !!!!!!!`);

// document.getElementById("myH").textContent = "Hello";
// document.getElementById("myP").textContent= "Dinya";

// let username = window.prompt("Enter your username");
// console.log("Your username is :- "+  username);

// let username;
// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myH").textContent = `welcome, ${username}`;
// }


// for inc and desc task

// const desc = document.getElementById("dec");
// const inc = document.getElementById("inc");
// const reset = document.getElementById("reset");
// const webCount = document.getElementById("myLable");

// let count =0;

// inc.onclick = function(){
//     count++;
//     webCount.textContent = count;
// }
// desc.onclick = function(){
//     count--;
//     webCount.textContent = count;
// }
// reset.onclick = function(){
//     count = 0;
//     webCount.textContent = count;
// }


// Random number generator

// const lable = document.getElementById("myID");
// const myBTN = document.getElementById("myBTN");
// let random;

// myBTN.onclick = function(){
//     random = Math.floor(Math.random() * 6) + 1;
//     lable.textContent = random;
// }

// for checked properties

// const myCh = document.getElementById("myCh");
// const visa = document.getElementById("visa");
// const master = document.getElementById("master");
// const Pay = document.getElementById("Pay");
// const submit = document.getElementById("submit");
// const forS = document.getElementById("forS");
// const forP = document.getElementById("forP");

// submit.onclick = function(){
//     if(myCh.checked){
//         forS.textContent = "You are Scbscribe";
//     }else{
//          forS.textContent = "You are not Scbscribe";
//     } 
    
//     if(visa.checked){
//         forP.textContent = "Pay using visa";
//     }else if(master.checked){
//         forP.textContent = "Pay using MasterCart";
//     }else if(Pay.checked){
//         forP.textContent = "Pay using PayPal";
//     }else{
//          forP.textContent = "Select one of the payment mode";
//     }
// }

// for method chaining

//let username = window.prompt("Enter your username ");

// without method chainning
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extra = username.slice(1);
// extra = extra.toLowerCase();

// username = letter + extra;

// console.log(username);

// with method chainning

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// Number gussing game

let minValue = 1;
let maxValue = 100;
let answer = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

let guess;