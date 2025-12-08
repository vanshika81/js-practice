class Car {
    brand = "Tesla";
    year = 2022;

    getInfo() {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }
}

const myCar = new Car();
console.log(myCar.getInfo())
