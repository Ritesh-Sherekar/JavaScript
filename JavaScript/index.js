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

const desc = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const webCount = document.getElementById("myLable");

let count =0;

inc.onclick = function(){
    count++;
    webCount.textContent = count;
}
desc.onclick = function(){
    count--;
    webCount.textContent = count;
}
reset.onclick = function(){
    count = 0;
    webCount.textContent = count;
}
