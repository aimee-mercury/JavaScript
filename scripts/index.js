// // get html tad.
document.getElementById("hash");
// console.log("Brice");
console.log(document.getElementById("hash"));
console.log(document.getElementById("test"));
// // getting attributes from HTML.
console.log(document.getElementById("link").href);
// // getting tag content.(it is for the content btn that "-"we use to get to texts,it shows us what we see on the web.)
console.log(document.getElementById("hash").innerHTML);
// // changing the HTML page
document.getElementById("about").href = "./contact.html";

// // EXERCISES
console.log((document.getElementById("test").color = "red"));
document.getElementById("test").style.color = "red";
document.getElementById("test").style.fontSize = "35px";
// // to change the HTML content!
document.getElementById("test").innerHTML = "27th march 2023";
document.getElementById("java").innerHTML = "JavaScript is good";
document.getElementById("p1").style["color"] = "green";
document.getElementById("p1").style["padding-top"] = "15px";

// console.log("Brice");
// let a = new date("2020-04-06");
// document.getElementById("rush").innerHTMLFullYear();

// //

//to create a tag in J.S
const test = document.createElement("h3");
test.id = "test";
test.innerHTML = "Helo world";
//
const p1 = document.createElement("p");
p1.id = "p1";
p1.innerHTML = "Today are learning practical Javascript";
// //
// const hash = document.createElement("p");
// hash.id = "hash";
// hash.innerHTML = "#learnProgress";
// //
const java = document.createElement("h1");
java.id = "java";
java.innerHTML = "JavaScript is powerful";
java.style.width = "30px";
//
const abtlink = document.createElement("a");
abtlink.id = "abtlink";
abtlink.href = "about.html";
abtlink.innerHTML = "about";
// //
const cntlink = document.createElement("a");
cntlink.id = "cntlink";
cntlink.href = "contact.html";
cntlink.innerHTML = "contact";
// //
const link = document.createElement("a");
link.id = "link";
link.href = "www.instagram.com";
link.innerHTML = "Instagram";
// //
const rush = document.createElement("p");
rush.id = "rush";
rush.innerHTML = "date of today";
const main = document.createElement("div");
main.id = "main";
main.appendChild(test);
main.appendChild(p1);
main.appendChild(hash);
main.appendChild(java);
main.appendChild(abtlink);
main.appendChild(cntlink);
main.appendChild(link);
document.body.appendChild(main);
document.body.appendChild(rush);
// //
// const today = new date();
// let today = document.getElementById("p");
// today.id = "today";
// today.innerHTML = "new date";
//
const day = new Date();
let p = document.getElementById("black");
p.innerHTML = day;
//

let birthdate = new Date("2002-12-03");
p.innerHTML = birthdate;
//
let date = birthdate.getDay();
p.innerHTML = date;
//
let month = birthdate.getMonth() + 1;
p.innerHTML = month;
//
let year = birthdate.getFullYear();
p.innerHTML = year;
//
let hour = birthdate.getHours();
p.innerHTML = hour;
// //
// let minutes = birthdate.getMinutes();
// p.innerHTML = minutes;
//
let website = window.location.href;
p.innerHTML = website;
// to see the protocol of your web
let protocol = window.location.protocol;
p.innerHTML = protocol;
// let host = window.location.host;
p.innerHTML = host;
let history = window.history.lenght;
//how to make an alert
window.alert("hey!");
//how  to make a confirm
window.confirm("hello");
//redirection
window.location.href = "https://www.twitter.com";
window.location.replace("www.instagram.com");

//JAVACRIPT MATH METHODS

//Math.floor()
let num = 3.7;
let roundedDown = Math.floor(num); // returns 3
//  roundes a number down to the nearest integer.
//Math.ceil()
let roundedUp = Math.ceil(num); // returns 4
//  roundes a number up to the nearest integer.
//Math.round()
let roundedNum = Math.round(num); // returns 4
//  roundes a number to the nearest integer.
//Math.random()
let randomNum = Math.random(); //  returns a random number between 0 and 1.

//Math.max()
let highest = Math.max(2, 15, 19, 20); // returns 20
//  returns the hightest digit..
//Math.mix()
let lowest = Math.mix(8, 4, 1, 3); //  returns 1
// returns the lowest digit.
//Math.pow()
let power = Math.pow(3, 2); // returns 27
//  returns the base to the exponent power.
//Math.abs()
let absoluteValue = Math.abs(-10); // returns 10
//  returns the absolute value of a number.
//Math.sqrt()
let squareRoot = Math.sqrt(144); // returns 12
//  returns the square root of a number.
//Math.cbrt()
let cubeRoot = Math.cbrt(8); // returns 2
//  returns the cube root of a number.
//Math.PI
let pi = Math.PI; // returns 3.1415
//  returns the value of PI.
//Math.sin()
let sine = Math.sin(0); // returns 0
//  returns the sine of a number.
//Math.cos()
let cosine = Math.cos(Math.PI); // returns -1
//  returns the cosine of a number.
//Math.tan()
let tangent = Math.tan(Math.PI / 4); // returns 1
//  returns the tangent of a number.
//Math.log()
let naturalLog = Math.log(10); // returns 2.3025
//  returns the natural logarithm (base e) of a number.
//Math.log10()
let base10Log = Math.log10(100); // returns 2
//  returns the base 10 logarithm of a number.
