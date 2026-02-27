//map is the most important is javascript
let array = [1, 2, 3, 4, 5, 6];
let double = array.map((num) => num * 2);
console.log(double);

let names = [
  { name: "Akash", age: 25, Height: "5'11'" },
  { name: "John", age: 30, Height: "6'0'" },
];

let age = names.map((object) => object.age);
console.log(age); // [25, 30]

let firstName = names.map((object) => object.name);
console.log(firstName); // ["Akash","John"]
