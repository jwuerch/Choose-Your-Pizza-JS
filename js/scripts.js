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


Topping.prototype.addTopping = function() {
  return totalToppingPrice += this.price;
};

Topping.prototype.removeTopping = function() {
  if (totalToppingPrice < this.price) {
    totalToppingPrice = 0;
  } else {
    totalToppingPrice = totalToppingPrice -= this.price
  };
  return totalToppingPrice;
};

Pizza.prototype.totalPrice = function() {
  return basePrice + totalToppingPrice;
}


/************************ jQuery *******************************/

$(document).ready(function() {

  $("#sizeBtn").click(function() {
    basePrice = 0;
    var input1 = $("#choice").val();
    var testPizza = new Pizza(input1);
    var testPizzaPrice = $(testPizza.sizePrice(input1));
    $(".spanSize").text(testPizza.diameter)



    $("#addTopBtn").click(function(event) {
      var toppingArray = []
      totalToppingPrice = 0;
      $(".display-topping").empty();

      $(":checkbox:checked").each(function(i) {
        var val = $(this).val()
        var input2 = val;
        var input3 = "";
        if ((val === "bacon") || (val === "pepperoni")) {
          input3 = 2;
        } else if ((val === "pineapple") || (val === "mushrooms")) {
          input3 = 1;
        } else {
          input3 = 3;
        };
        var addMyTopping = new Topping(input2,input3);
        console.log(addMyTopping);


      });


      $(".display-topping").show();

      $(toppingArray).each(function(i){
        $(".display-topping").append("<li>" + toppingArray[i] + "</li>");
      });


      event.preventDefault();
    });







  })



});
