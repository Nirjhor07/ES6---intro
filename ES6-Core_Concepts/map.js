//map is the most important is javascript
let array = [1, 2, 3, 4, 5, 6];
let double = array.map((num) => num * 2);
// console.log(double);

let names = [
  { name: "Akash", age: 25, Height: "5'11'" },
  { name: "John", age: 30, Height: "6'0'" },
];

let age = names.map((object) => object.age);
// console.log(age); // [25, 30]

let firstName = names.map((object) => object.name);
// console.log(firstName); // ["Akash","John"]

// declare a array
const friends = ["Akash", "nirjhor", "kamal", "jamal"];
// console.log(friends[0]);
// console.log(friends[0][2]);

const firstLetterofEach = friends.map((x) => x[0]);
console.log(firstLetterofEach);

const products = [
  {
    name: "iPhone",
    color: "black",
    price: 4000,
  },
  {
    name: "Xiaomi",
    color: "white",
    price: 5000,
  },
  {
    name: "samsung",
    color: "white",
    price: 3000,
  },
];
// const keys = Object.keys(products);
// console.log(keys);
// console.log(products);

// getting each name of the products using map
const eachProductName = products.map((xName) => xName.name);
console.log(eachProductName);

// getting price of each products
const eachProductPrice = products.map((pd) => pd.price);
console.log(eachProductPrice);

// getting the price and double it
const eachProductPrice2 = products.map((pd) => pd.price * 2);
console.log(eachProductPrice2);

// we can pass 3 parameter as well
// getting name with index number
const eachProductPriceIndex = products.map((pd, i) => {
  const name = pd.name;
  console.log(i, name);
});
console.log(eachProductPriceIndex);
