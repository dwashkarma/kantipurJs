// console.log("Hello World");

//Data Type
// ===============================
// 1.Stirngs => ""
// 2.Number => 0/1/2/3
// 3.Boolean => true / false
// 4.Null => null
// 5.Undefined => undefined
// 6.Objects => { }
//  tring
// var address = "kathmandu"; //string
// const post = "frontend"; //string
// console.log(name);
// console.log(address);
// console.log(post);

//Number
// ===========================

let num1 = 10; //Number
// let num2 = 30; //Number
// console.log(num1);
// console.log(num2);
// console.log(num1 + num2);

//Boolean

// let boolean1=false
// let boolean2=true
// console.log(boolean1)
// console.log(boolean2)

//Object

// let a = {
//   // keys :values
//   name: "Dwash",
//   address: "ktm",
//   contact: 98000000,
//   boolean: true,
//   post: "frontend",
//   Null: null,
//   job: undefined,
//   number: 20,
// };
// // console.log(a.contact);
//

// Write an Object with the three keys and values and print separetly...

// for example;

// {companyName:'Chandragiri',
// location:'ktm'}

// >>'Chandragiri'
// >>'ktm'
// const company = {
//   location: "Kalimati",
//   name: "Institute",
// };

// console.log(company.name);
// console.log("======================");
// console.log(company.location);

//Object
// let object = { name: "Kantipur" ,contact:980000};
// console.log(object);

//Array
// let array = ["Kantipur",200,"kalimati"];
// console.log(array);

//Array

// let a = [
//   {
//     name: "Dwash",
//   },
//   {
//     address: "KTM",
//   },
// ];
// console.log(a);

//Accessing the keys and values of an Object
// using ;
// Object.keys()  and Object.values()

//===========================================================

// Object and Arrays

//1. Object and Arrays are the collections of Datas,
//2. Object requires key and value as a couple,
//3. Array contains all data  types including Objects,

// Today topic
// Array indexing...............

let indexing = ["array1", "array2", "array3"];

console.log(indexing[0]);
console.log(indexing[1]);
console.log(indexing[2]);

//accessing the value of object..........

// let b={
//   name:'Dwas',
//   address:'ktm'
// }

// console.log(b.name)

//Mixing both indexing of Array and Object.............

// let a = [
//   {
//     firstName: "dwash",
//     lastName: "akjcac",
//   },
// ];
// console.log(a[0].firstName);

//Normal Indexing of an Array.................

// let a=["dwas","karma","kantipur","kalimati"]
// console.log(a[3])


let b = [
  { firstName: "Dwas", lastname: "karma" },
  { firstName: "Suresh", lastname: "Rokaya" },
];
console.log(b[1].lastname);

//object inside Array and accessing the value of object...

let arr = [
  { name: "DwasKarma", address: "ktm" },
  { name: "Suresh", address: "ktm" },
  { name: "kantipur", address: "kalimati" },
];

//accessing the information of Dwash
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//accessing individual name..
console.log(arr[0].name);
console.log(arr[1].name);

//getting access of address inside object...
console.log(arr[1].address);
