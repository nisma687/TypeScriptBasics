// console.log('Hello World');

// let age: number  = 20;
// if (age < 50) {
//   age+=10;
//     console.log('You are young', age);
// }

// fundamentals
// the any type,arrays,tuples,enums,functions,objects

// let sales = 123_456_789; // type number
// let sales2 :number = 123_456_789; // type number
// let course  = 'Typescript'; // type string
// let isBeginner  = true; // type boolean
// let level; // type any
// level=10;
// level='10';
// we can also declare a variable without assigning a value, in that case the type of the variable is any

// if we declare a variable without assigning a value, the type is any in typescript
// typescript is a statically typed language, which means that the type of a variable is known at compile time, unlike javascript where the type of a variable is known at runtime. 
// if we use any type in typescript, we are basically telling typescript to ignore type checking for that variable.so its loses the advantages of typescript.

// any types are useful when we dont know the type of a variable upfront or when we are working with variables of different types.
// any type functions
// function render(document : any){
//   console.log(document);
// }


// we can also declare arrays in typescript and specify the type of the elements in the array
// let numbers: number[] = [1,2,'3'];
// let numbers: number[] = [1,2,3];

// numbers.forEach(n=>n.)

// tuples (arrays with mixed types and limited number of elements)

// id and a varibale
let person: [number,string] = [1,'Steve'];
// person[1]. // we can access the elements of a tuple using the index operator for example person[1] will give us the name of the person
// person[0] = '10'; // we cannot assign a string to a number type

person.push(1); // we can push elements to a tuple
// a tuple is a fixed length array where each element has a particular type and the number of elements is fixed and we can push elements to a tuple but we cannot add elements to a tuple using the index operator
// tuples are useful when we have 2 values that are closely related for example a key value pair



// enums 
// (enumerations) are just storing same related values in a group

// const small = 1;
// const medium = 2;
// const large = 3;
// Pascal naming convention
// enum Size {Small,Medium,Large}; if we use just enum compiler will not give optimized code
// but if we use const enum compiler will give optimized code in the index.js file

const enum Size {Small=1,Medium,Large};
let mySize :Size = Size.Medium;
console.log(mySize);
// functions

// function calculateTax (income:number):number{
//   return 0;
// } // we can specify the type of the parameters and the return type of the function here we are saying that the function takes a number as a parameter and returns a number

// function calculateTax (income:number):void{
//   console.log(income);
// }
// void type means that the function does not return anything

function calculateTax (income:number,taxYear=2022):number{
  // let x;
  if(taxYear < 2022){
    return income*0.2;
  }
  return income*0.4;
}
calculateTax(100,2023);































