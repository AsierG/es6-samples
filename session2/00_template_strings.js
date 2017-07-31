const hello = 'Hello';
const world = "World";

const helloWorld = `${hello}, ${world}!!!`;

const suma = function (a, b) {
    return a + b;
};

const dosYDos = `Dos y dos son ${suma(2, 2)}`;

const lorem = `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation`;

console.log(helloWorld);
console.log(dosYDos);

console.log(lorem);


const raw = function (strings, args) {
    return  strings.raw[0];
};

console.log(raw`Hello!\n`);
console.log('next line');
console.log('Hello!\n');
console.log('next line');