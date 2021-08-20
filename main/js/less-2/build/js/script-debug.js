"use strict";

var typeNumber = (1, -1, 1.25, NaN, Infinity);
var typeString = ("", '', "".concat(typeNumber));
var typeUndefine; // undefined;

var typeNull = null;
var typeBool = false; // 0

typeBool = true; // 1

var arr = [1, 5, 9];
var obj = {
  name: "Viktor",
  age: 42,
  skill: []
};
console.log(2 === "2");
var n = 0;
console.log(++n);
console.log(n);
var ddfd = null;

if (n === 1) {} else {}

if (n === 1) {} else if (true) {} else {}

if (2 > 1 && 3 < 5) {}

Number.isNaN(n);

switch (+prompt("Pass:")) {
  case 123:
  case 321:
  case 456:
    console.log('Yes');
    break;

  default:
    console.log('Net');
}

var age = 50;
var rez = age > 65 ? "Пора на пенсию" : "Еще нужно работать";
console.log(n % 2 ? "-" : "+");