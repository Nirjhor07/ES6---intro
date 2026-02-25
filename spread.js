//lets declare a array
const arr = [1, 2, 3, 4]; // max Number = 4
console.log(arr); // return the value a an array //output: [ 1, 2, 3, 4 ]

// but spead does retun all the array element but not in array [] form
// ek kothay protita element re bichayya return kore

const arr2 = [1, 50, 63, 90, 100];
console.log(...arr2); // output: 1 50 63 90 100

//function to get the max number
function maxNumber(arrPass) {
  //   const max = Math.max(arr);
  const max = Math.max(...arr);
  //   console.log(max); // this return Nan = Not a Number
  return max;
}
console.log(maxNumber(arr)); // this return Nan = Not a Number

//another useful case
const arr3 = arr;
arr3.push(5);
//look the output here for arr
//the actual arr was const arr = [1, 2, 3, 4];
// so what it does is take the refence and keep the reference
console.log(arr); //output : [ 1, 2, 3, 4, 5 ]
console.log(arr3); //output : [ 1, 2, 3, 4, 5 ]

//Solution to this problem is use spraed operator (...)
const newArr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr4Solution = [...newArr]; // now it will keep the actual array
arr4Solution.push(90);
console.log(newArr); // output : [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr4Solution); // output : [1, 2, 3, 4, 5, 6, 7, 8, 90]
