function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1500, "black");
var iPhone6s = new Phone("Apple", 1800, "pink");
var OnePlusOne = new Phone ("Nokia", 1200, "gold");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();