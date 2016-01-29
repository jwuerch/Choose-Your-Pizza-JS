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
  return(basePrice);
};

Topping.prototype.addTopping = function() {
  return totalToppingPrice += this.price;
};

Pizza.prototype.totalPrice = function() {
  return basePrice + totalToppingPrice;
}
/************************ jQuery *******************************/

$(document).ready(function() {
  $("#sizeBtn").click(function() {
    $(".display-size").show();
    $("#buttonalign").show();
    $(".choose-toppings").show();
    basePrice = 0;
    var input1 = $("#choice").val();
    var testPizza = new Pizza(input1);
    var testPizzaPrice = $(testPizza.sizePrice(input1));
    $(".spanSize").text(testPizza.diameter);
    $(".row2").show();
    $(".finalPrice").text(basePrice);
    $("#addTopBtn").click(function(event) {
      totalToppingPrice = 0;
      var toppingArray = [];
      $(".display-topping").empty();
      $(":checkbox:checked").each(function() {
        var val = $(this).val();
        var input2 = val;
        var input3 = "";
        /** Decides What input3 will be based on input2 **/
        if ((val === "bacon") || (val === "pepperoni")) {
          input3 = 2;
        } else if ((val === "pineapple") || (val === "mushrooms")) {
          input3 = 1;
        } else if ((val === "chorizo") || (val === "salmon")) {
          input3 = 3;
        } else {
          input3 = 0;
        }
        var testTopping = new Topping(input2,input3);
        testTopping.addTopping();
        $(".display-topping").append("<li>" + testTopping.toppingName + "</li>");
      });
      if($("#frmtest input:checked").length > 1) {
        totalToppingPrice = 0;
      };
      $(".finalPrice").text(basePrice + totalToppingPrice);
      event.preventDefault();
    });
  });
});
