
const productsDOM = document.querySelector(".car-models-row-content ");

// const productsDOM1 = document.querySelector(".car-models-row-content-1 ");

// getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title,subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image , subtitle};
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
  // async getProducts() {
  //   try {
  //     let result = await fetch("estates.json");
  //     let data = await result.json();
  //     let products = data.items;
  //     products = products.map((item) => {
  //       const { title,subtitle, price } = item.fields;
  //       const { id } = item.sys;
  //       const image = item.fields.image.fields.file.url;
  //       return { title, price, id, image , subtitle};
  //     });
  //     return products;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
// display Products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <div class="car-models-row-content-aClass">
        <div class="car-models-row-content-aClass-title" data-id="${product.id}">
        <div class="car-models-row-content-aClass-title-item-1" >
          <span>${product.title}</span>
        </div>
        <div class="car-models-row-content-aClass-title-item-2">
        ${product.price}
        </div>
        <div class="car-models-row-content-aClass-title-item-3">
          <span>${product.subtitle}</span>
        </div>

      </div>
   
      <div class="car-models-row-content-aClass-img">
        <img  src=${product.image} alt"product"  class="img">

      </div>
      </div>
        `;
    });
    productsDOM.innerHTML = result;
    // productsDOM1.innerHTML = result;
  }
}
// local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //get all products
  products.getProducts().then((products) => ui.displayProducts(products));
});





const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav1');

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e){
  nav.classList.toggle('active')
};


