function Phone(brand, price, color, model, sale, discount, bonus) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
    this.sale = sale;
    this.discount = discount;
    this.bonus = bonus;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
  
}

Phone.prototype.hotSale = function() {
  console.log(this.sale + " Only today!!! " + this.model + " " + this.discount);
}

 Phone.prototype.getBonus = function() {
   console.log("Buy " + this.model + " and get " + this.bonus + " for free!")
 }
 



var SamsungGalaxyS6 = new Phone("Samsung", 1500, "black", "Samsung Galaxy S6", "Summer Sale!!!", "-20%!!!", "Samsung Galaxy S4" );
var iPhone6s = new Phone("Apple", 1800, "pink", "iPhone 6S", "Hot Sale!!!", "-25%!!!", "Wireless Headphones");
var OnePlusOne = new Phone ("Nokia", 1200, "gold", "OnePlusOne S7i", "Spring Sale!!!", "-30%", "Smart Watch");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.hotSale();
iPhone6s.hotSale();
OnePlusOne.hotSale();

SamsungGalaxyS6.getBonus();
iPhone6s.getBonus();
OnePlusOne.getBonus(); 















