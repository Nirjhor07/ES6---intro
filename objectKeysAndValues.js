//we can get all the keys of an object
// declare a object first
const product = { name: "iPhone", color: "black", price: 4000 };
const keys = Object.keys(product);
console.log("Keys:", keys);

//we can get all the values of an object
const values = Object.values(product);
console.log("Values:", values);

//we can get all the entries of an object
//entrie is basically an Array of array
// means it takes each key and its value and store it on a array
// and all the the array stored in another array
const entries = Object.entries(product);
console.log("entries:", entries);
