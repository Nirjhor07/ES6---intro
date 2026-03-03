// //map is the most important is javascript
// let array = [1, 2, 3, 4, 5, 6];
// let double = array.map((num) => num * 2);
// // console.log(double);

// //object array
// let names = [
//   { name: "Akash", age: 25, Height: "5'11'" },
//   { name: "John", age: 30, Height: "6'0'" },
// ];

// let age = names.map((element) => {
//   const name1 = element.name;
//   if (name1 === "Akash") {
//     console.log(name1);
//   }
//   return name1;
// });
// console.log(age);

// declare a array
const friends = ["Akash", "nirjhor", "kamal", "jamal"];
// console.log(friends[3]);
// console.log(friends[0][2]);
//aksh
// nirjhor
const firstLetterofEach = friends.map((x) => x[2]);
// console.log(firstLetterofEach);

// const foreach = friends.forEach((name) => console.log(name));
// console.log(foreach);

//filter
//name array
const name = ["Akash", "Nirjhor", "Ashraf", "Hossain", "thomas"];
const bigNames = name.find((nam) => nam.length > 6);
console.log(bigNames); // nirjhor -> 7

// filter
const fSameFirstLeterName = name.filter((nam) => nam[0] === "A");
// console.log(fSameFirstLeterName); // Akash
