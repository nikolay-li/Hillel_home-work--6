'use strict';
// TASK!!
// Перепишіть конструкцію if з використанням умовного оператора '?':

// let result;

// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let result;
let a = +prompt('number A');
let b = +prompt('number B')

console.log(((a + b) < 4) ? result = 'Мало' : result = 'Багато');