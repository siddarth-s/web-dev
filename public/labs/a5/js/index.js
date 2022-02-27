// alert('Hello World!');

console.log('Hello World!');

console.log('\n')

console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;

console.log(global1 + '\n' + functionScoped + '\n' + blockScoped +
    '\n' + constant1);

console.log('\n')

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable + '\n' + floatingPointNumber + '\n' +
            stringVariable + '\n' + booleanVariable + '\n' +
            isNumber + '\n' + isString + '\n' + isBoolean)

console.log('\n')

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable <100;

console.log(true1 + '\n' + false1 + '\n' + false2 + '\n' + true2 + '\n' +
            true3 + '\n' + true4 + '\n' + true5 + '\n' + false3)

console.log('\n')

console.log('If Else');
if(true1) {
    console.log(true);
}
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('\n')

console.log('Ternary conditional operator')
const loggedIn = true;
console.log('\n')
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('\n')

console.log('Legacy ES5 Function')

console.log('\n')

function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('\n')

console.log('New ES6 Functions')

console.log('\n')

const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);