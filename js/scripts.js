function Pizza(diameter, toppings) {
  this.diameter = diameter;
  this.toppings = toppings;
}

function Toppings(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
}


Pizza.prototype.price = function() {
  var pizzaPrice = 0
  /** Conditional Statement For Pizza Size **/
  if (this.diameter = "small") {
    pizzaPrice += 5;
  } else if (this.diameter = "medium") {
    pizzaPrice += 7;
  } else {
    pizzaPrice += 10;
  };
  /** Conditional Statement For Pizza Toppings **/

}
