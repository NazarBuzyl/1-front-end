const typeNumber = (1, -1, 1.25, NaN, Infinity);
const typeString = ("", '', `${typeNumber}`);

let typeUndefine; // undefined;
let typeNull = null;

let typeBool = false; // 0
typeBool = true;      // 1

const arr = [1, 5, 9];

const obj = {
    name: "Viktor",
    age: 42,
    skill: []
};

console.log(2 === "2");

let n = 0;

console.log(++n);
console.log(n);
let ddfd = null;
if (n === 1) {

} else {

}


if (n === 1) {

} else if (true) {

} else {

}

if (2 > 1 && 3 < 5) {

}

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

const age = 50;

const rez = (age > 65) ? "Пора на пенсию" : "Еще нужно работать";

console.log((n % 2) ? "-" : "+");
