describe("Pizza", function() {
  var myPizza = new Pizza("small");
  var sampleTopping = new Topping("pineapple", 2.5)
  var sampleToppingTwo = new Topping("chorizo", 3)

  it("creates a new pizza of your choice called myPizza with desired diameter and toppings", function() {
    expect(myPizza.diameter).to.equal("small");
  });

  it("creates a new topping constructor with desired toppings", function() {
    expect(sampleTopping.toppingName).to.equal("pineapple");
    expect(sampleTopping.price).to.equal(2.50);
  });

  it("creates a prototype method for the cost of a pizza depending on selections", function() {
    expect(myPizza.sizePrice()).to.equal(5);
  });

  it("adds one topping", function() {
    expect(myPizza.addTopping(sampleTopping)).to.equal(2.5);
  });

  it("removes one topping", function() {
    expect(myPizza.removeTopping(sampleTopping)).to.equal(5.5);
  });

});
