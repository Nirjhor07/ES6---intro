// this concept is very very important to understand yet complex but funny and useful
function outterFunction() {
  const value = "function";
  function innerFunction() {
    console.log(`Im am a inner${value}`);
  }
  return innerFunction;
}

// here the outer variable store the return statement of the outterFunction() which is :  return innerFunction;
const outer = outterFunction();
console.log(outer); //output: [Function: innerFunction]
// here we can call variable outer as a funtion as it has the innerFunction has return statement
outer(); // output: Im am a innerfunction
// but cannot access the innerfunction outside the scope of outterFunction()
// when we tried to access innerFunction() outside the scope of outterFunction() it give us a error
// innerFunction() //  innerFunction is not defined

//eibar cholo moja kora jak closure function concept use kore
function counter() {
  let count = 0;
  function countMachine(shopOwner) {
    count++;
    console.log("i am the count value of ", shopOwner, count);
  }
  return countMachine;
}

const count1 = counter();
// count1(); // output: i am the count value of  1
// count1(); // output: i am the count value of  2
// count1(); // output: i am the count value of  3
// count1(); // output: i am the count value of  4

// cholo aro moja kora jak eibar parameter diya korbo moja
count1("Nirjhor"); // output: i am the count value of  Nirjhor 1
count1("Nirjhor"); // output: i am the count value of  Nirjhor 2
count1("Nirjhor"); // output: i am the count value of  Nirjhor 3
count1("Nirjhor"); // output: i am the count value of  Nirjhor 4

const shop2Count = counter();
shop2Count("Akash"); // output: i am the count value of  Akash 1
shop2Count("Akash"); // output: i am the count value of  Akash 2
shop2Count("Akash"); // output: i am the count value of  Akash 3
count1("Nirjhor"); // output: i am the count value of  Nirjhor 5
