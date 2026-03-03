// JSON

const product = {
  name: "iphone",
  color: "black",
  isNew: true,
  price: 20,
};

// console.log(product, typeof product);

//json convert
const convertToJSON = JSON.stringify(product);
// console.log(convertToJSON, typeof convertToJSON);

const load = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((nir) => nir.json())
    // .then((data) => console.log(data));
    .then((data) => productDisplay(data));
};
const productDisplay = (products) => {
  //doira niya ashi bap re
  const bap = document.getElementById("div-display");
  bap.innerHTML = "";
  //   console.log(bap);
  // console.log(products);
  for (const product of products) {
    // console.log(product.name);
    const name = product.name;
    //create element
    const newWlwmwnt = document.createElement("div");
    newWlwmwnt.innerText = name;
    // append kori
    bap.append(newWlwmwnt);
  }
};
