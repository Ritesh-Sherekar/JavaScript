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

// let minValue = 1;
// let maxValue = 100;
// let answer = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

// let guess;
// let attempt = 0;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess the correct number Between ${minValue} and ${maxValue}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert("Enter the valid number!!!!");
//   }
//   else if (guess < minValue || guess > maxValue) {
//     window.alert("Enter the between the range!!!!");
//   }
//   else {
//     attempt++;
//     if (guess < answer) {
//       window.alert("It`s too low !!!!");
//     }
//     else if (guess > answer) {
//       window.alert("It`s too High !!!!");
//     }
//     else {
//       window.alert(
//         `You guess correct number and you take ${attempt} attempt to Guess!!!` );
//          running = false;
//     }
//   }
// }

// Tempreture Convertion Program

// const textvalue = document.getElementById("textBox");
// const Celsius = document.getElementById("toCelsius");
// const Fahrenheit = document.getElementById("toFahrenheit");
// const mySubmit = document.getElementById("submit");
// const mytext = document.getElementById("myID");

// let temp;

// function myFunction() {
//   if (Celsius.checked) {
//     temp = Number(textvalue.value());
//     temp = temp * 9 / 5 + 32;
//     mytext.textContent = temp + "F";
//   } else if (Fahrenheit.checked) {
//    temp = Number(textvalue.value());
//     temp = (temp - 32) * (5/9);
//     mytext.textContent = temp + "C";
//   } else {
//     mytext.textContent = "Select the checked box";
//   }
// }

// Spread Operator

// function sum(...num){
//   let result = 0 ;
//   for(let nums of num){
//     result += nums;
//   }
//   return result;
// }
// let ans = sum(1, 2, 3, 4);
// console.log(ans);

// For Dice Game

// function myFunction() {
//   const myInput = document.getElementById("myIn").value;
//   const myBtn = document.getElementById("myBT");
//   const myVal = document.getElementById("myValue");
//   const myIMG = document.getElementById("myImg");
//   const values = [];
//   const img = [];

//   for(let i =0; i< myInput; i++){
//     let randVal = Math.floor(Math.random() * 6) + 1;
//     values.push(randVal);
//     img.push(`<img src="images/${randVal}.png" alt="Dice: ${randVal}">`);
  
//   }
//   myVal.textContent = `Dice :- ${values.join(", ")}`;
//   myIMG.innerHTML = img.join('');
// }



// Random Password Generator

function generatePassword(NoDigit, isLowerCase, isUpperCase, isDigit, isSymbol){

  let lowerCase = "abcdefghigklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
  let digit = "0123456789";
  let symbol = "!@#$%^&*()_+~;./,<>?:";

  let allowed = "";
  let password = "";

  allowed += isLowerCase ? lowerCase : "";
  allowed += isUpperCase ? upperCase : "";
  allowed += isDigit ? digit : "";
  allowed += isSymbol ? symbol : "";

  if(NoDigit <= 0){
    console.log("Password length sould be greater then 0")
  }
  if(allowed.length <=0){
    console.log("You must be select one set of rule");
  }

  for(let i=0; i<NoDigit; i++){
    let randNum = Math.floor(Math.random() * allowed.length);
    password += allowed[randNum];
  }

  return password;
}

const noOfDigit = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeDigit = true;
const includeSymbol = true;

let password = generatePassword(noOfDigit, includeLowerCase, includeUpperCase, includeDigit, includeSymbol);
console.log("Your generated password should be :- " + password);