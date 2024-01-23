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
// calculateTax(100,2023);

// objects

let emmployee:{
  readonly id:number,
  name:string,
  retire: (date:Date)=>void
}
 ={id :1,
  name :'Nisma',
  retire: (date:Date)=>{
    console.log(date);
  }
};
// employee.id=2; we cannot change the value of a readonly property

// advanced types in typescript (union types, type guards, type aliases, nullable types, type assertions)
// Dry principle (don't repeat yourself)

// type aliases 

// we can create our own types using type aliases and reuse them in our code

type Employee ={
  id:number,
  name:string,
  retire: (date:Date)=>void
}


let employee:Employee
 ={id :1,
  name :'Nisma',
  retire: (date:Date)=>{
    console.log(date);
  }
};

// union types (we can use union types to combine multiple types into one type like this) weight can be a number or a string in this case
// let weight:number | string;

function kgToLbs(weight:number | string):number
{
  // narrowing
  if( typeof weight ==="number")
  {
    return weight*2.2;
  }
  else{
    return parseFloat(weight)*2.2;
  }
}
kgToLbs(10);
kgToLbs('10');
// console.log(kgToLbs('10'));
// console.log(kgToLbs(10));

// Intersection types (we can use intersection types to combine multiple types into one type like this)

// let employee:Employee & {department:string} // we can use intersection types to combine multiple types into one type like this
//  '|'(union type) and '&' (intersection type) are called type operators
// alias uses type operator
type Draggable={
  drag:()=>void
};
type Resizable={
  resize:()=>void
};

type UIWidget = Draggable & Resizable;
// in this case UIWidget is a type that has all the members of Draggable and Resizable types means that UIWidget is a type that has drag and resize methods in it. & is the intersection type operator

let textBox: UIWidget ={
  drag:()=>console.log('dragging'),
  resize:()=>console.log('resizing')
};
// in this case textBox is a type that has all the members of Draggable and Resizable types means that textBox is a type that has drag and resize methods in it. & is the intersection type operator


// type guards (we can use type guards to narrow down the type of a variable within a conditional block)


// Literal types (we can use literal types to specify exact values)
type Quantity=50|100|200;
let quantity:Quantity=50;
type Metric='kg'|'lbs'|'km'|'miles';
let metric:Metric='kg';

// in this case metric can only be kg or lbs or km or miles, we cannot assign any other value to metric variable . we use | operator to specify literal types

// nullable types (we can use nullable types to allow null values for a variable)

function greet(name:string | null | undefined)
{
  if(name)
  console.log('Hello '+name.toUpperCase());
  else
  console.log('Hola!!!!!! ');
}
greet('Nisma');
// greet(null);
// greet(undefined);


type Customer ={
  birthDate:Date
}

function getCustomer(id:number):Customer|null|undefined
{
  
  return id===0? null: {birthDate:new Date()};

}
let customer = getCustomer(1);
// if(customer!=null && customer!=undefined)
// Optional property access operator (we can use optional property access operator to access properties of an object that may not exist)

console.log(customer?.birthDate);




//  explored typescript basics and advanced types in typescript (union types, type guards, type aliases, nullable types, type assertions)





























































