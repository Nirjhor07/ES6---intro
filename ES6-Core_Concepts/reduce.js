//suppose we have a array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
//for loop chailaiya sum er value
for (number of numbers) {
  sum = sum + number;
}
console.log(sum);

//syntax of reduce 
// array.reduce((accumulator, currentValue) => { return result }, initialValue);

// eitare reduce maira easily koira fela jayyy
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

