const carsDOM = document.querySelector(".car-models-row-content-1");

// getting the products
class Car {
  async getCars() {
    try {
      let result = await fetch("saloons.json");
      let data = await result.json();
      let cars = data.items;
      cars = cars.map((item) => {
        const { title,subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image , subtitle};
      });
      return cars;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UIX {
  displayCars(cars) {
    let result = "";
    cars.forEach((car) => {
      result += `
      <div class="car-models-row-content-aClass">
        <div class="car-models-row-content-aClass-title" data-id="${car.id}">
        <div class="car-models-row-content-aClass-title-item-1" >
          <span>${car.title}</span>
        </div>
        <div class="car-models-row-content-aClass-title-item-2">
        ${car.price}
        </div>
        <div class="car-models-row-content-aClass-title-item-3">
          <span>${car.subtitle}</span>
        </div>

      </div>
   
      <div class="car-models-row-content-aClass-img">
        <img  src=${car.image} alt"product"  class="img">

      </div>
      </div>
        `;
    });
    carsDOM.innerHTML = result;
  }
}
// local storage
class Storage1 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX();
  const cars = new Car();

  //get all products
  cars.getCars().then((products) => ui.displayCars(products));
});



