//Intersting topic destructor

//declare a object first
const product = { name: "iPhone", color: "black", price: 4000 };
console.log(product);

// we can actually store the property value in a variable to reduce code
const productName = product.name;
console.log(productName);
// similarly
const productColor = product.color;
console.log(productColor);
//similarly
const productPrice = product.price;
console.log(productPrice);

// destructor actually comes with short-cut doing the same task line 7-15
// so what it doest declare the variable and store the
// value of the property that match the name with the variable
const { name, color, price } = { name: "Xiaomi", color: "Black", price: 2000 };
console.log(name, color, price);

// we can change the variable name as well
const {
  name: mobileName,
  color: mobileColor,
  price: mobilePrice,
} = {
  name: "Samsung",
  color: "white",
  price: 4000,
};
console.log(mobileName, mobileColor, mobilePrice);

// we also can leave a varible declare as empty
const { name1, color1 } = {
  name1: "banglaMobile",
  color1: "onkshundor",
  price1: 90000,
};
console.log(name1);

// we also take all the value with rest or speard operator
const { name2, color2, ...rest } = {
  name2: "banglaMobile007",
  color2: "onkBeshishundor",
  price2: 90000,
};
console.log(rest);

// we can do the same for array as well
const [value1, value2] = [1, 3, 4];
console.log(value1);
console.log(value2);

// we can do the same for array as well now with rest operator
const [value3, value4, ...allvalues] = [1, 3, 4, 9, 8, 7, 3];
console.log(allvalues);

//another example using arrow function
const numbers = () => [1, 2, 3, 4, 9, 9, 9, 9, 9, 9];
numbers();
console.log(numbers());
//here i will take just 3 values and store to a variable
const [numValue1, numValue2, numValue3] = numbers();
console.log(numValue1, numValue2, numValue3);

//another example using  function
function arrNumbers() {
  const numbers = [9, 8, 9, 9, 89, 89, 89, 59, 59, 5];
  console.log(numbers);
  return numbers;
}
console.log(arrNumbers());

// i will show all the value except first three
const [arrNumValue1, arrNumValue2, arrNumValue3, ...restAllArrayValues] =
  arrNumbers();
console.log(restAllArrayValues);
