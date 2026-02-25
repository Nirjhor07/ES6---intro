// suppose we have a object
const product = { name: "iPhone", color: "black", price: 4000 };
// Object.freeze(product);
Object.seal(product);
// we can add property here simply
product.anotherPhoneName = "iPhone 12 pro max ";
console.log(product); // output : {
//   name: 'iPhone',
//   color: 'black',
//   price: 4000,
//   anotherPhoneName: 'iPhone 12 pro max '
// }

// we also can remove simply
delete product.color;
console.log(product); // output: { name: 'iPhone', price: 4000, anotherPhoneName: 'iPhone 12 pro max ' }

// we can also edit
product.name = "Xiaomi";
console.log(product); // output: { name: 'Xiaomi', price: 4000, anotherPhoneName: 'iPhone 12 pro max ' }

// but when we add freeze all the rest actions doesnt works
// now adding freeze in line number : 3
console.log(product); // output : { name: 'iPhone', color: 'black', price: 4000 }
// nothing changed as it freeze all the action on this object

// another thing is seal the object
// look at line number : 4
console.log(product); // output : { name: 'Xiaomi', color: 'black', price: 4000 }
// so it will not let you edit add to the object
// but you can edit
// here in this case name: 'iPhone' becomes name: 'Xiaomi'
// line number : 19
// because we used product.name = "Xiaomi";
