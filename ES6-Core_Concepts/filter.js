//filter is almost like map but it returns the match items or matched conditions value

const products = [
  { name: "iPhone", color: "black", price: 4000 },
  { name: "Xiaomi", color: "white", price: 5000 },
  { name: "samsung", color: "white", price: 3000 },
];
const filterPhoneName = products.filter((pd) => pd.name[0] === "i");
console.log(filterPhoneName); //[ { name: 'iPhone', color: 'black', price: 4000 } ]

//name array
const name = ["Akash", "nirjhor", "Ashraf", "Hossain", "thomas"];
const bigNames = name.filter((nam) => nam.length > 6);
console.log(bigNames); // [ 'nirjhor', 'Hossain' ]

//even number using filter
const numbers = [2, 5, 415, 195, 1, 198, 2198, 4987, 487, 478, 1];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); //[ 2, 198, 2198, 478 ]

const fSameFirstLeterName = name.filter((nam) => nam[0] === "A");
console.log(fSameFirstLeterName); // [ 'Akash', 'Ashraf' ]
