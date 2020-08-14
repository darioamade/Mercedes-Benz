const carsDOM = document.querySelector(".car-models-row-content-1");

// getting the products
class Car {
  async getCars() {
    try {
      let result = await fetch("saloons.json");
      let data = await result.json();
      let cars = data.items;
      cars = cars.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
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

const estatesDOM1 = document.querySelector(".car-models-row-content-2");
// getting the products
class Estate {
  async getEstates() {
    try {
      let result = await fetch("estates.json");
      let data = await result.json();
      let estates = data.items;
      estates = estates.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return estates;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UIX1 {
  displayEstates(estates) {
    let result = "";
    estates.forEach((estate) => {
      result += `
        <div class="car-models-row-content-aClass">
          <div class="car-models-row-content-aClass-title" data-id="${estate.id}">
          <div class="car-models-row-content-aClass-title-item-1" >
            <span>${estate.title}</span>
          </div>
          <div class="car-models-row-content-aClass-title-item-2">
          ${estate.price}
          </div>
          <div class="car-models-row-content-aClass-title-item-3">
            <span>${estate.subtitle}</span>
          </div>
  
        </div>
     
        <div class="car-models-row-content-aClass-img">
          <img  src=${estate.image} alt"product"  class="img">
  
        </div>
        </div>
          `;
    });
    estatesDOM1.innerHTML = result;
  }
}
// local storage
class Storage2 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX1();
  const estates = new Estate();

  //get all products
  estates.getEstates().then((products) => ui.displayEstates(products));
});

const suvsDOM2 = document.querySelector(".car-models-row-content-3");
// getting the products
class Suv {
  async getSuvs() {
    try {
      let result = await fetch("suv.json");
      let data = await result.json();
      let suvs = data.items;
      suvs = suvs.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return suvs;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UIX2 {
  displaySuvs(suvs) {
    let result = "";
    suvs.forEach((suv) => {
      result += `
          <div class="car-models-row-content-aClass">
            <div class="car-models-row-content-aClass-title" data-id="${suv.id}">
            <div class="car-models-row-content-aClass-title-item-1" >
              <span>${suv.title}</span>
            </div>
            <div class="car-models-row-content-aClass-title-item-2">
            ${suv.price}
            </div>
            <div class="car-models-row-content-aClass-title-item-3">
              <span>${suv.subtitle}</span>
            </div>
    
          </div>
       
          <div class="car-models-row-content-aClass-img">
            <img  src=${suv.image} alt"product"  class="img">
    
          </div>
          </div>
            `;
    });
    suvsDOM2.innerHTML = result;
  }
}
// local storage
class Storage3 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX2();
  const suvs = new Suv();

  //get all products
  suvs.getSuvs().then((products) => ui.displaySuvs(products));
});

const coupeDOM3 = document.querySelector(".car-models-row-content-4");
// getting the products
class Coupe {
  async getCoupes() {
    try {
      let result = await fetch("coupe.json");
      let data = await result.json();
      let coupes = data.items;
      coupes = coupes.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return coupes;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UIX3 {
  displayCoupes(coupes) {
    let result = "";
    coupes.forEach((coupe) => {
      result += `
            <div class="car-models-row-content-aClass">
              <div class="car-models-row-content-aClass-title" data-id="${coupe.id}">
              <div class="car-models-row-content-aClass-title-item-1" >
                <span>${coupe.title}</span>
              </div>
              <div class="car-models-row-content-aClass-title-item-2">
              ${coupe.price}
              </div>
              <div class="car-models-row-content-aClass-title-item-3">
                <span>${coupe.subtitle}</span>
              </div>
      
            </div>
         
            <div class="car-models-row-content-aClass-img">
              <img  src=${coupe.image} alt"product"  class="img">
      
            </div>
            </div>
              `;
    });
    coupeDOM3.innerHTML = result;
  }
}
// local storage
class Storage4 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX3();
  const coupes = new Coupe();

  //get all products
  coupes.getCoupes().then((products) => ui.displayCoupes(products));
});



const cabsDOM5 = document.querySelector(".car-models-row-content-5");
// getting the products
class Cab {
  async getCabs() {
    try {
      let result = await fetch("cab.json");
      let data = await result.json();
      let cabs = data.items;
      cabs = cabs.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return cabs;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products
class UIX5 {
  displayCabs(cabs) {
    let result = "";
    cabs.forEach((cab) => {
      result += `
            <div class="car-models-row-content-aClass">
              <div class="car-models-row-content-aClass-title" data-id="${cab.id}">
              <div class="car-models-row-content-aClass-title-item-1" >
                <span>${cab.title}</span>
              </div>
              <div class="car-models-row-content-aClass-title-item-2">
              ${cab.price}
              </div>
              <div class="car-models-row-content-aClass-title-item-3">
                <span>${cab.subtitle}</span>
              </div>
      
            </div>
            <div class="car-models-row-content-aClass-img">
              <img  src=${cab.image} alt"product"  class="img">
      
            </div>
            </div>
              `;
    });
    cabsDOM5.innerHTML = result;
  }
}
// local storage
class Storage5 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX5();
  const cabs = new Cab();

  //get all products
  cabs.getCabs().then((products) => ui.displayCabs(products));
});




const roadsDOM6 = document.querySelector(".car-models-row-content-6");
// getting the products
class Road {
  async getRoads() {
    try {
      let result = await fetch("road.json");
      let data = await result.json();
      let roads = data.items;
      roads = roads.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return roads;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products

class UIX6 {
  displayRoads(roads) {
    let result = "";
    roads.forEach((road) => {
      result += `
            <div class="car-models-row-content-aClass">
              <div class="car-models-row-content-aClass-title" data-id="${road.id}">
              <div class="car-models-row-content-aClass-title-item-1" >
                <span>${road.title}</span>
              </div>
              <div class="car-models-row-content-aClass-title-item-2">
              ${road.price}
              </div>
              <div class="car-models-row-content-aClass-title-item-3">
                <span>${road.subtitle}</span>
              </div>
      
            </div>
            <div class="car-models-row-content-aClass-img">
              <img  src=${road.image} alt"product"  class="img">
      
            </div>
            </div>
              `;
    });
    roadsDOM6.innerHTML = result;
  }
}
// local storage
class Storage6 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX6();
  const roads = new Road();

  //get all products
  roads.getRoads().then((products) => ui.displayRoads(products));
});






const mvpsDOM7 = document.querySelector(".car-models-row-content-7");
// getting the products
class Mvp {
  async getMvps() {
    try {
      let result = await fetch("mvp.json");
      let data = await result.json();
      let mvps = data.items;
      mvps = mvps.map((item) => {
        const { title, subtitle, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image, subtitle };
      });
      return mvps;
    } catch (error) {
      console.log(error);
    }
  }
}
// display Products

class UIX7 {
  displayMvps(mvps) {
    let result = "";
    mvps.forEach((mvp) => {
      result += `
            <div class="car-models-row-content-aClass">
              <div class="car-models-row-content-aClass-title" data-id="${mvp.id}">
              <div class="car-models-row-content-aClass-title-item-1" >
                <span>${mvp.title}</span>
              </div>
              <div class="car-models-row-content-aClass-title-item-2">
              ${mvp.price}
              </div>
              <div class="car-models-row-content-aClass-title-item-3">
                <span>${mvp.subtitle}</span>
              </div>
      
            </div>
            <div class="car-models-row-content-aClass-img">
              <img  src=${mvp.image} alt"product"  class="img">
      
            </div>
            </div>
              `;
    });
    mvpsDOM7.innerHTML = result;
  }
}
// local storage
class Storage7 {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIX7();
  const mvps = new Mvp();

  //get all products
  mvps.getMvps().then((products) => ui.displayMvps(products));
});



