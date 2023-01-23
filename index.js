// first programm in javascript.
console.log('Hello World!');

// declaration of variables.
let name = 'Vaibhav Tale';
console.log(name);

// same
let firstName = "Hello vaibhav";
console.log(firstName);

let value = 0.3;
value = 1.9;
console.log(value);

// object or class.
let person = {

    age: 30,
    name: 'mosh'
};
console.log(person);

// accesing the members of person class and their data.
person.name = 'vaibhya';
console.log(person.name);

// functions in javascript.

// 1. void function.
function greet(name) {

    console.log("hii " + name);
}

greet('mahesh');
greet('bhai');

// 2. integer function
function square(num) {

    return num * num;
}

console.log(square(9));

// Arethmetic Operators.
let x = 20;
console.log(++x);
console.log(x++);
console.log(x);

// Comparison Operator
let y = 2;

console.log(y > 10);

// Equality Operators

// 1.Strict Equality - this operator consider\check the value as well as the type of operator.

console.log(y === 2);

// 2.Lose Equality Operator cosider only value of two operands.

console.log(y == '2');

// Ternary Operators.

let type = y > 1 ? 'gold' : 'silver';

console.log(type);

console.log(1 | 2);

// SWapping the values of two variables Exercise..

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Conditional Statements...

let h = 38;

if (h > 10) {
    console.log('Greater than 10.');
}
else if (h === 10) {
    console.log('Equal to 10.');
}
else console.log('Less than 10.');

// Switch Case Statements....

let role = 'none';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;

    case 'user':
        console.log('Just user');
        break;

    default:
        console.log('Default user');
}

// For loops..

for (let i = 0; i < 5; i++) {
    console.log('Hello World!', i);
}

// while loops are same as in c++...

//  Do While loop

let z = 4;

// s

// For IN loops...

let polors = ['red', 'blue', 'green'];

for (let index in polors) {
    console.log(index, polors[index]);
}

// For OF loops...

for (let j of polors) {
    console.log(j);
}

let son = {

    nav: 'vaibhya',
    gaw: 'sutgirani'
};

for (let key in son) {

    console.log(key, son[key]);
}

// Break and Continue...

for (let q = 0; q <= 10; q++) {

    // Break
    // if(q>5) break;

    // continue
    if (q % 2 === 0) continue;
    console.log(q);
}

// Exercise : write a function to find max of two given numbers..

function maximum(d, e) {

    if (d < e) {
        return d;
    }
    return e;
}

console.log(maximum(5, 100));

// Boolean function...

function isLandscape(width, height) {

    if (width > height) return true;

    return false;
}

console.log(isLandscape(-3, 0));

// Speed limit function

function speedLimit(speed) {

    let speedlimit = 70;
    let kmpoint = 5;

    if (speed <= speedlimit + kmpoint) {

        console.log('okk.');
    }
    else {

        let points = Math.floor((speed - speedlimit) / kmpoint);

        if (points >= 12) console.log('Your License has been suspended.');

        else console.log('point:', points);
    }
}

speedLimit(70);

for (let g = 0; g <= 10; g++) {

    if (g % 2 === 0) console.log(g, 'Even');
    else console.log(g, 'Odd');
}

// Truthy values..

function truthy(array) {
    let count = 0;
    for (let ind of array) {

        if (ind) count++;
    }
    return count;
}

let array = [0, null, '', 9, NaN, 34];

console.log(truthy(array));

// string properties...

let movie = {

    title: 'a',
    realesed: 2020,
    director: 'b',
    rating: 9.8
};

showProperties(movie);

function showProperties(obj) {

    // Naive Approach----------
    // console.log('title',movie.title);
    // console.log('director',movie.director);

    // Mentos Wali Approach-----

    for (let pr in obj) {

        if (typeof (obj[pr]) === 'string') {

            console.log(pr, obj[pr]);
        }
    }
}
// Sum of multiple's of 3 and 5 upto limit

function sum(limit) {
    let sum = 0;
    for (let f = 3; f <= limit; f++) {

        if (f % 3 === 0 || f % 5 === 0) sum += f;

    }
    return sum;
}

console.log(sum(10));

// Object Oriented Programming...

let radius = 1;
let xx = 1;
let yy = 1;

const circle = {

    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    isvisible: true,

    draw: function () {

        console.log('Drawing a circle.');
    }
};

circle.draw();

// Factory function...

function createSquare(side) {
    // Commanly while using factory functions we use camel notation's..
    return {
        side,
        draw() {
            console.log('Draw');
        }
    };
}

const square1 = createSquare(4);
console.log(square1);

const square2 = createSquare(189);
console.log(square2);

// Constructor Function...

function Circle(rad) {
    // Unlike factory functions here we use Pascal notations
    this.rad = rad;
    this.draw = function () {
        console.log('Draw');
    }
}

const Circle1 = new Circle(89);
console.log(Circle1);
// const another =new Circle(832);
// Object.
const rectangle = {

    length: 2
};
// Adding members to an object.
rectangle.color = 'yellow';
rectangle.draw = function () { }

// Deleting members from an object.
delete rectangle.length;

console.log(rectangle);

let xb = {};
// what it means in js-let xb = new object();

// Cloning an object.

const another = {};

for (let key in Circle1) {
    another[key] = Circle1[key];
}
console.log(another);

// Clonning by Mentos wali method..

const another1 = Object.assign({}, circle);
console.log(another1);

console.log('Auto Save has been turned on.')

// Math function's..

console.log(Math.round(2.893));

console.log(Math.floor(2.6));
console.log(Math.ceil(2.6));

// String primitive.

const msg = 'Hii you are awesome!';
// String functions..
console.log(msg.length);
console.log(msg[0]);
console.log(msg.endsWith('!'));
console.log(msg.startsWith('n'));
console.log(msg.replace('are', 'were'));
console.log(msg);
console.log(msg.toLocaleUpperCase());
console.log(msg.toLocaleLowerCase());
// String object.

const object = new String('Hello');

// Declaring an array -- 
const numbers = [1,2,3];

// Adding elemnts at the end.
numbers.push(5,6);
console.log(numbers);

// Adding elements at the beggining.
numbers.unshift(0,-1,-2,-2);
console.log(numbers);

// Adding at the Middle.
numbers.splice(2,0,'a','b');
console.log(numbers);

// Finding an element in array --
console.log(numbers.indexOf('b'));
console.log(numbers.indexOf('z'));

// Checking the presence of particular element.
console.log(numbers.lastIndexOf(-2));
console.log(numbers.indexOf(1) !== -1);

console.log(numbers.includes(5));