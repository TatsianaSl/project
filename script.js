"use strict";
//alert("Hello world!");

var myVariable;
myVariable = 10;
console.log( myVariable );

var myString = "Hello World!";
console.log("Hello World!");

var myBoolean = false;
console.log(myBoolean);

var myNull = null;
console.log(myNull);

var myUndefined = undefined;
console.log(myUndefined);
//if --else
var season = "spring";
if (season === 'autumn') {
  console.log("Ура! Осень!");
}
else {
  console.log("NOT Autumn :)");
}
//loop for
var number;

for (number = 0; number < 10; number++) {
  console.log("Lets count 0-9: " + number);
}

//functions
function multiply(number1, number2, number3) {
  var result = number1*number2*number3;
  return result;
}

console.log(multiply(1,2,3));
console.log(multiply(2,3,4));

//DOM

var myArticle = document.getElementById("article-1");

myArticle.classList.add("myClass");

var showMe =document.getElementById('show-me');
showMe,onclick = function(){
  alert('one more click')
}

var eventListener = document.getElementById('event-listener');
eventListener.addEventListener("click", function(){
  this.classList.toggle('toggled');
});
