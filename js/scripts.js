function Pizza(diameter) {
  this.diameter = diameter;
};

function Topping(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
};

var basePrice = 0

// var pineapple = new Topping("pineapple", 2.50);
// var pepperoni = new Topping("pepperoni", 2);
// var mushrooms = new Topping("mushrooms", 1.50);
// var sausage = new Topping("sausage", 3);
// var chorizo = new Topping("chorizo", 4);
// var bacon = new Topping("bacon", 2);


Pizza.prototype.sizePrice = function() {
  var pizzaPrice = basePrice;
  if (this.diameter === "small") {
    pizzaPrice += 5;
  } else if (this.diameter === "medium") {
    pizzaPrice += 7;
  } else {
    pizzaPrice += 10;
  };
  return pizzaPrice;
};

Pizza.prototype.addTopping = function(topping) {
  return basePrice += topping.price;
}
