// Today we will learn about Arrow function and it's usages
// Arrow funtion is very powerful
// Step -> 1 : Declare a Arrow Function
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 7));

// Step -> 2 jodi ekta matro parameter thake tahole () 1st bracket na dileo chole
const name = (nameInputByUser) => nameInputByUser;
console.log(name("Nirjhor"));

// step -> 3 jodi ektao parameter na thake mane 0 perameter tokhn must bracket () dewa lagbe
const amrName = () => "Akash";
console.log(amrName());

//step -> 4 by default to arrow function e parameter lage na but still jdi function
//  activity beshi hoy and {} use kora lage tokhn retun statement use kora lagbe.
const calculator = (num1, num2) => {
  const sum = num1 + num2;
  const mul = num1 * num2;
  const total = sum + mul;
  console.log(sum, mul, total);
  return total;
  //   return `${Number(sum)}\n${mul} \n${total}`;
};
console.log(calculator(9, 9));

// we can use `` = template string to return value
const fullName = (firstName, lastName) =>
  `First Name: ${firstName} \nLast Name: ${lastName} \n${firstName} ${lastName} `;
// console.log(fullName("Nirjhor", "Akash"));

// we cannot call it before where it first initialized or declared.

// we can save a default value to parameter in arrow function
const defaultValueSet = (num1, num2 = 0) => num1 + num2;
//if we dosent pass two value as parameter it will take default value
console.log(defaultValueSet(10));
// but if we pass both values it will take both values

console.log(defaultValueSet(10, 80));
