//6. Create a class Car with properties brand and year. 
// Add a method getInfo() that returns "Brand: Tesla, Year: 2022".

class Car {
    brand = "Tesla";
    year = 2022;

    getInfo() {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }
}

const myCar = new Car();
console.log(myCar.getInfo()) //o/p: Brand: Tesla, Year: 2022
