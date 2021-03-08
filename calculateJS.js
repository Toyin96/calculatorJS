// document.body.innerHTML = '<h1>Working with Js...</h1>';
let screen = document.querySelector('.screen p');
screen.innerText = '12345';


// const numberZero = document.querySelector('.zero button');
// numberZero.innerText = parseInt("0");
// numberZero.addEventListener("click", function(){
//     screen.innerText = numberZero.innerText;
// });

document.querySelector('.flex button').addEventListener("click", function(event){
    screen.innerText = event.target.innerText;
});

const nuberOne = document.querySelector('.one button');
nuberOne.innerText = parseInt("1");

const nuberTwo = document.querySelector('.two button');
nuberTwo.innerText = parseInt("2");

const nuberThree = document.querySelector('.three button');
nuberThree.innerText = parseInt("3");

const nuberFour = document.querySelector('.four button');
nuberFour.innerText = parseInt("4");

const nuberFive = document.querySelector('.five button');
nuberFive.innerText = parseInt("5");

const nuberSix = document.querySelector('.six button');
nuberSix.innerText = parseInt("6");

const nuberSeven = document.querySelector('.seven button');
nuberSeven.innerText = parseInt("7");

const nuberEight = document.querySelector('.eight button');
nuberEight.innerText = parseInt("8");

const nuberNine = document.querySelector('.nine button');
nuberNine.innerText = parseInt("9");

/* Now i'll be doing the operators*/

const clear = document.querySelector('.clear button');





