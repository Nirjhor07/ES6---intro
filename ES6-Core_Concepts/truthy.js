//javascripts core concepts truthy concepts
let data;
// console.log(data); // output: undefined
data = false; // output: falsy
// Zero = 0 consider negetive
data = 0; // output: falsy
// empty string consider negative
data = ""; // output: falsy
// but string with white space consider positive
data = " "; // output: truthy
// also string and have any valu consider positive
data = "0"; // output: truthy
// null consider negative value
data = null; // output: falsy
// undefined consider negative value
data = undefined; // output: falsy
// {} considered as positive value
data = {}; // output: truthy
// similarly [] considered as positive value
data = [];
data = true; // output: truthy

// if (data) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// ! operator make the variable opposite
// means if it has a true value it makes it false
// and false value convert into true
let value = true; // output: falsy
value = false; // output: truthy
// if (!value) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// !! bang operator convert the data into boolean value not matter the data type
value = null; // output: falsy -> 1st converts null (!) from negative to positive then 2nd (!) converts null from positive to negative
// console.log(typeof value); // output : object
// console.log(value); // output : null

value = 10; // output: truthy 1st(!) converts 10 from positive to negative  then 2nd (!) converts 10 from negative to positive
//ultimately converts the data into boolean value
if (!!value) {
  console.log("truthy");
} else {
  console.log("falsy");
}
