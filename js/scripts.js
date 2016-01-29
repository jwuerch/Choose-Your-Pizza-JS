function Pizza(diameter, toppings) {
  this.diameter = diameter;
  this.toppings = toppings;
};

function Toppings(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
};

var pineapple = new Toppings("pineapple", 2.50);
var pepperoni = new Toppings("pepperoni", 2);
var mushrooms = new Toppings("mushrooms", 1.50);
var sausage = new Toppings("sausage", 3);
var chorizo = new Toppings("chorizo", 4);


Pizza.prototype.price = function() {
    var pizzaPrice = 0
  if (this.diameter === "small") {
    pizzaPrice += 5;
  } else if (this.diameter === "medium") {
    pizzaPrice += 7;
  } else {
    pizzaPrice += 10;
  };
  console.log(pizzaPrice);
  return pizzaPrice
};
