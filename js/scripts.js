/** Giving Pizza a base price of 0 **/
var basePrice = 0;
var totalToppingPrice = 0;

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
  return totalToppingPrice += topping.price;
};

Pizza.prototype.removeTopping = function(topping) {
  if (totalToppingPrice < topping.price) {
    return 0
  } else {
  return totalToppingPrice -= topping.price
  };
};


/************************ jQuery *******************************/

$(document).ready(function() {
  /** List of Toppings **/
  var pineapple= new Topping("pineapple", 2.50);
  var pepperoni = new Topping("pepperoni", 2);
  var mushrooms = new Topping("mushrooms", 1.50);
  var sausage = new Topping("sausage", 3);
  var chorizo = new Topping("chorizo", 4);
  var bacon = new Topping("bacon", 2);

  $("#sizeBtn").click(function() {
    basePrice = 0;
    var toppingArray = []
    var input1 = $("#choice").val();
    var testPizza = new Pizza(input1);
    var testPizzaPrice = $(testPizza.sizePrice(input1));
    $(".spanSize").text(testPizza.diameter)
    console.log("base price is " + basePrice)



    $("#addTopBtn").click(function(event) {
      $(".display-topping").empty();

      $(":checkbox:checked").each(function(i){
        var value = $(this).val();
        console.log(value);
        toppingArray[i] = value;
        var addToppings = $(testPizza.addTopping(bacon));
        console.log(testPizza.addTopping(bacon))
      });

      $(".display-topping").show();

      $(toppingArray).each(function(i){
        $(".display-topping").append("<li>" + toppingArray[i] + "</li>");
      });
      console.log(toppingArray);


      event.preventDefault();
    });







  })



});
