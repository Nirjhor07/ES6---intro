// suppose we have an object
const product = {
  name: "iphone",
  color: "white",
  price: 2000,
  1: "1st product",
  brand: {
    brand1: "apple",
    // brand2: {
    //   type: "1st hand",
    //   condition: "fresh",
    // },
  },
};

// console.log(product);

// acces ovject property value using .notation
// console.log(product.name);
// console.log(product.1); // return error as we cannot acces property value like this
// console.log(product.brand);
// console.log(product.brand.brand1);
// console.log(product.brand.brand2.condition);

// solution bracket notation
// console.log(product["1"]);
// console.log(product["brand"]);
// console.log(product["brand"]["brand1"]);
// console.log(product["brand"]["brand2"]["condition"]);

// now commenting line 9 to 12
// console.log(product.brand.brand2.condition);
// this returns
// TypeError: Cannot read properties of undefined (reading 'condition')

// solution
// console.log(product.brand?.brand2?.condition);
// means if this exits then look for the value

//looping in objects for in
for (const keys in product) {
  // console.log(keys)

  const value = product[keys];
  console.log(keys,':', value);
}
