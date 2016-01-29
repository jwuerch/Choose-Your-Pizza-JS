/** Giving Pizza a base price of 0 **/
var basePrice = 0;

/** Creation of Constructor Functions **/
function Pizza(diameter) {
  this.diameter = diameter;
};

function Topping(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
};

/** Prototype Methods **/
Pizza.prototype.sizePrice = function() {
  if (this.diameter === "small") {
    basePrice += 5;
  } else if (this.diameter === "medium") {
    basePrice += 7;
  } else {
    basePrice += 10;
  };
  return(basePrice)
};


Pizza.prototype.addTopping = function(topping) {
  return basePrice += topping.price;
};

Pizza.prototype.removeTopping = function(topping) {
  return basePrice -= topping.price
};

/************************ jQuery *******************************/

/** List of Toppings **/
var pineapple = new Topping("pineapple", 2.50);
var pepperoni = new Topping("pepperoni", 2);
var mushrooms = new Topping("mushrooms", 1.50);
var sausage = new Topping("sausage", 3);
var chorizo = new Topping("chorizo", 4);
var bacon = new Topping("bacon", 2);
