// For each
// does not return new array

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.56789;
// const result = Math.ceil(number);

// const number = 25;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.min(5, 7, 8, 0);

// const result = Math.max(5, 7, 8, 0);

// const result = Math.random();
// const result = Math.floor( Math.random()*10);
// const result = Math.ceil( Math.random()*10);

const months = [
'January', 
'February', 
'March', 
'April', 
'May', 
'June', 
'July', 
'August',
'September',
'October',
'November', 
'December', ];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];


const date = new Date();
const month = date.getMonth();
// console.log(months[month]);


const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()}th ${months[month]} ${date.getFullYear()}`;
console.log(sentence);