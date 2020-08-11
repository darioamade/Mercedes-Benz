/* const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "9l93q3abkz77",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "T9CNF6Gm9hHcxbI9tHPyajzXHiIkn43x-oLAtim84Xg",
});

const productsDOM = document.querySelector(".car-models-row-content-aClass");

console.log;
class Products {
  async getProducts() {
    try {
      client;
      let contentful = await client.getEntries({
        content_type: "manStore",
      });

      let result = await fetch("/products.json");
      let data = await result.json();

      let products = data.items;

      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
            <div class="car-models-row-content-aClass-title">
            <div class="car-models-row-content-aClass-title-item-1">
              <span>${product.title}</span>
            </div>
            <div class="car-models-row-content-aClass-title-item-2">
            ${product.title + " " + product.price}
            </div>
            <div class="car-models-row-content-aClass-title-item-3">
              <span>  ${product.title}</span>
            </div>

          </div>
       
          <div class="car-models-row-content-aClass-img">
            <img  src=${product.image}     alt"product"  class="img">

          </div>
            `;
    });
    productsDOM.innerHTML = result;
  }
}

// Local storage
class Storage {
  static saveProducts(products) { 
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI(); // instance of the UI = new object
  const products = new Products(); // instance of the Products = new object
  // setup application
  ui.setupAPP();
  // Get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products); //2) we need to use the JSON method
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});
 */

const productsDOM = document.querySelector(".car-models-row-content-aClass");

// getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map(item =>{
          const {title, price} = item.fields;
          const {id} = item.sys;
          const image = item.fields.image.fields.file.url;
          return {title, price,id,image}
      })
      return products
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UI {}
// local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //get all products
  products.getProducts().then((data) => console.log(data));
});
