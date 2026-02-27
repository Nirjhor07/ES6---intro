// find only return the matched 1st item
//even number using filter
const numbers = [2, 5, 415, 195, 1, 198, 2198, 4987, 487, 478, 1];
const evenNumbers = numbers.find((num) => num % 2 === 0);
console.log(evenNumbers); // 2

//name array
const name = ["Akash", "Nirjhor", "Ashraf", "Hossain", "thomas"];
const bigNames = name.find((nam) => nam.length > 6);
console.log(bigNames); // nirjhor

//letter has A in the beging
const fSameFirstLeterName = name.find((nam) => nam[0] === "A");
console.log(fSameFirstLeterName); // Akash

//products array to use find
const products = [
  { name: "iPhone", color: "black", price: 9000 },
  { name: "iPhone", color: "black", price: 4000 },
  { name: "Xiaomi", color: "white", price: 5000 },
  { name: "samsung", color: "white", price: 3000 },
  { name: "iPhone", color: "black", price: 1000 },
  { name: "iPhone", color: "black", price: 2000 },
  { name: "iPhone", color: "black", price: 3000 },
  { name: "iPhone", color: "black", price: 9000 },
];
const filterPhoneName = products.find((pd) => pd.name[0] === "i");
console.log(filterPhoneName); //{ name: 'iPhone', color: 'black', price: 9000 }
