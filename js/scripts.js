function Pizza(diameter) {
  this.diameter = diameter;
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
var bacon = new Toppings("bacon", 2);


Pizza.prototype.sizePrice = function() {
  var pizzaPrice = 0;
  if (this.diameter === "small") {
    pizzaPrice += 5;
  } else if (this.diameter === "medium") {
    pizzaPrice += 7;
  } else {
    pizzaPrice += 10;
  };
  return pizzaPrice;
};

Pizza.prototype.totalPrice = function() {
  console.log(this.toppings)
  this.toppings.forEach(function(topping) {
    console.log(topping.toppingName);
  });
};



// Pizza.prototype.addTopping = function(topping) {
//   var addToppingPrice = 0;
//   return addToppingPrice += topping.price;
// };
