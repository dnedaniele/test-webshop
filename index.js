// in the container lets add a h1 with hello
const heading = document.createElement("h1");

heading.innerHTML = "hello";

document.querySelector("#container").appendChild(heading);

// Object factory: product

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.display = function () {
    // render the product
    const container = document.createElement("div");
    const nameTag = document.createElement("h1");
    const priceTag = document.createElement("h2");
    const qntTag = document.createElement("h3");
    nameTag.innerHTML = this.name;
    priceTag.innerHTML = this.price;
 
      container.appendChild(nameTag);
      container.appendChild(priceTag);
    document.querySelector("#product-list").appendChild(container);
  };
}


const bagPack = new Product("bagpack 123", "45", "1")
const shoes = new Product("black shoes", 24, 1)
const tShirt = new Product("blue Tshirt", 18, 3);


bagPack.display()
shoes.display()
tShirt.display()